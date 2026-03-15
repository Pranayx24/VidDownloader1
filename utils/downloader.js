const youtubedl = require('yt-dlp-exec');

/**
 * Fetches video information using yt-dlp
 * @param {string} url - The video URL
 * @returns {Promise<object>} - Video info (title, download link, thumbnail)
 */
async function downloadVideo(url) {
    try {
        const output = await youtubedl(url, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: [
                'referer:https://www.google.com/',
                'user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            ]
        });

        // Filter for a direct video link (usually 'url' in formats)
        // We look for a direct link or the best combined format
        const downloadUrl = output.url || (output.formats && output.formats.reverse().find(f => f.url && (f.ext === 'mp4' || f.vcodec !== 'none'))?.url);

        if (!downloadUrl) {
            throw new Error('Could not find a downloadable video link.');
        }

        return {
            title: output.title,
            thumbnail: output.thumbnail,
            downloadUrl: downloadUrl,
            duration: output.duration_string,
            source: output.extractor_key
        };
    } catch (error) {
        console.error('yt-dlp error:', error.message);
        throw error;
    }
}

module.exports = { downloadVideo };
