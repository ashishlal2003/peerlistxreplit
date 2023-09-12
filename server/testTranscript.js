const { YoutubeTranscript } = require('youtube-transcript');

YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=ExZnOl7ZXO8').then((transcript) => {
  const completeText = transcript.map((entry) => entry.text).join(' ');
  console.log(completeText);
});
