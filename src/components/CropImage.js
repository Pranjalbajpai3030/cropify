import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { getCroppedImg } from './CropImage';

const ImageEditor = ({ src, onSave, onCancel }) => {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const editorRef = React.createRef();

  const handleSave = async () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const croppedImageUrl = await getCroppedImg(canvas.toDataURL(), {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
      });
      onSave(croppedImageUrl);
    }
  };

  return (
    <div className="image-editor-container">
      <h2>Edit Image</h2>
      <AvatarEditor
        ref={editorRef}
        image={src}
        width={250}
        height={250}
        border={50}
        borderRadius={125}
        scale={scale}
        rotate={rotate}
      />
      <div className="controls">
        <label>
          Scale:
          <input
            type="range"
            value={scale}
            min="1"
            max="3"
            step="0.1"
            onChange={(e) => setScale(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Rotate:
          <input
            type="number"
            value={rotate}
            onChange={(e) => setRotate(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ImageEditor;
