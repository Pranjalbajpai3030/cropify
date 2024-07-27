import React, { useState } from 'react';
import { uploadImage } from '../services/api';
import ImageEditor from './ImageEditor';
import './ImageUpload.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ImageUpload = ({ setResult }) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (image) {
      const data = await uploadImage(image);
      setResult(data);
    }
  };

  const handleEditSave = (croppedImageUrl) => {
    setPreviewUrl(croppedImageUrl);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  return (
    <Card className="image-upload-card">
      <CardContent>
        <div className="image-upload-container">
          <input type="file" id="file-input" onChange={handleFileChange} />
          {previewUrl ? (
            <div className="image-preview">
              <img src={previewUrl} alt="Preview" />
            </div>
          ) : (
            <div className="image-preview-placeholder">
              <Typography variant="body1" color="textSecondary">Image Preview</Typography>
            </div>
          )}
          {!isEditing && previewUrl && (
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
          )}
          {isEditing ? (
            <ImageEditor src={previewUrl} onSave={handleEditSave} onCancel={handleEditCancel} />
          ) : (
            <button className="upload-button" onClick={handleUpload}>Upload</button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageUpload;
