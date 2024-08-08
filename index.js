
// const express = require('express');
// const { Configuration, OpenAIApi } = require('openai');
// const app = express();
// const port = 3000;

// const configuration = new Configuration({
//     apiKey: 'sk-eWxxWdHnahHBz_PtcZBE0uI3L5Hybvd9JZ9eFsDNFNT3BlbkFJHBTe688X4Y72e_8BcPpsAWXBkyi4Q09H3WEEXk3wwA',
// });
// const openai = new OpenAIApi(configuration);

// app.use(express.static('public'));
// app.use(express.json());

// app.post('/chat', async (req, res) => {
//     const { message } = req.body;
//     const response = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: message,
//         max_tokens: 150,
//     });
//     res.json({ reply: response.data.choices[0].text });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });




const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000;

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

if (!apiKey) {
  console.error('API key is missing. Please set REACT_APP_OPENAI_API_KEY in your .env file.');
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 150,
    });
    res.json({ reply: response.data.choices[0].text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

