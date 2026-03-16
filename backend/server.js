const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { downloadVideo } = require('./utils/downloader');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check
app.get('/', (req, res) => {
    res.send('Video Downloader API is running...');
});

// Download endpoint
app.post('/download', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        console.log(`Processing download request for: ${url}`);
        const videoData = await downloadVideo(url);
        res.json(videoData);
    } catch (error) {
        console.error('Download error:', error);
        res.status(500).json({ error: 'Failed to fetch video. Please check the URL and try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
