const express = require('express');
const {anyPrompt, summarize} = require('../controllers/genControllers');

const router = express.Router();

router.post('/anyPrompt', anyPrompt);
router.post('/summarize', summarize);

module.exports = router;