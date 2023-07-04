//********* EXPRESS SERVER */
import express from 'express';
const app = express();
const port = 30800;

//********* CHAT GPT CODE */
import api_key from './keys/api_key.js';

import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  organization: 'org-rpY6h9a2QPo5zpxqEoG9c5cC',
  //   apiKey: process.env.OPENAI_API_KEY,
  apiKey: api_key,
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say thi sis a test',
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({ data: response.data });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
