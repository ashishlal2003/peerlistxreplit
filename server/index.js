const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const transcriptRoutes = require('./routes/transcriptRoutes');
const genRoutes = require('./routes/genRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/transcripts', transcriptRoutes);
app.use('/gen', genRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
}
);
