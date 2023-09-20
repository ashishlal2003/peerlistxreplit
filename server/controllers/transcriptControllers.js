const {YouTubeTranscriptApi} = require('youtube_transcript_api');

const getTranscript = async (req, res) => {
    try {
      const { videoURL } = req.body;
      const transcript = await YouTubeTranscriptApi.get_transcript(videoURL).then((transcript) => {
        const completeText = transcript.map((entry) => entry.text).join(' ');
        return completeText;
      });
  
      // Respond with the complete text instead of the transcript
      res.status(200).json({ transcript: transcript });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = { getTranscript };