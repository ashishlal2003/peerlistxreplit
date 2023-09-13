const { YoutubeTranscript } = require('youtube-transcript');

const { TextServiceClient } =
  require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyCcrKRaX4Lx5RjcjEaY7IYN1dA7UUTFm1M";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

var completeText = "";
YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=ExZnOl7ZXO8').then((transcript) => {
    completeText = transcript.map((entry) => entry.text).join(' ');
//   console.log(completeText);
});

const prompt = `Summarize the following for me: ${completeText}`;

client
  .generateText({
    model: MODEL_NAME,
    prompt: {
      text: prompt,
    },
  })
  .then((result) => {
    if (result && result[0] && result[0].candidates && result[0].candidates[0]) {
      const generatedText = result[0].candidates[0];
      console.log(generatedText.output);
    } else {
      console.log('No generated text found in the response.');
    }
  });

