let WEBHOOK = "";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  WEBHOOK = req.body.url || "";
  res.status(200).json({ ok: true });
}