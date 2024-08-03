const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { predictDisease } = require('../Utils/modelUtils.js');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const imageBuffer = req.file.buffer;
        const result = await predictDisease(imageBuffer);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing the image');
    }
});

module.exports = router;
