const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");
const transcript = require("../utility/transcript");


const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyD4kJWgEQXDxOAO7QZLyzyrlKZkwFt2U1E";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const anyPrompt = async(req, res, next) => {
    try {
      const { prompt } = req.body;
      const result = await client.generateText({
        model: MODEL_NAME,
        prompt: {
          text: prompt,
        },
      });
      // console.log(result);
      res.status(200).json(result[0].candidates[0].output);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
};

//CORRECT the summarize API by calling the getTranscript function correctly!
const summarize = async (req, res, next) => {
  try {
    const { videoURL } = req.body;
    const toSummarize = await transcript(videoURL);
    // console.log(toSummarize);
    const txt = "";

    console.log(txt);
    const result = await client.generateText({
      model: MODEL_NAME,
      prompt: {
        text: txt,
      },
    });
    // console.log(result);
    res.status(200).json(result[0].candidates[0].output);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//CORRECT the quiz API by calling the getTranscript function correctly!
const quiz = async(req, res, next) => {
  try{
      const { videoURL } = req.body;
      const toQuiz = await transcript(videoURL);
      const prompt = `Create a MCQ quiz on the following text: ${toQuiz}`;
      const result = await client.generateText({
        model: MODEL_NAME,
        prompt: {
          text: prompt,
        },
      });
      res.status(200).json(result[0].candidates[0].output);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};


module.exports = { anyPrompt, summarize, quiz };