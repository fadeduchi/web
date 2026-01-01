import axios from 'axios';
import FormData from 'form-data';

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const buffer = Buffer.concat(chunks);

    const form = new FormData();
    form.append('image_file', buffer, { filename: 'image.png' });
    form.append('size', 'auto');

    const response = await axios.post(
      'https://api.remove.bg/v1.0/removebg',
      form,
      {
        headers: {
          ...form.getHeaders(),
          'X-Api-Key': process.env.REMOVE_BG_KEY,
        },
        responseType: 'arraybuffer',
      }
    );

    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(response.data);
  } catch {
    res.status(500).json({ error: 'processing failed' });
  }
}
