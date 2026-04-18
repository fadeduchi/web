export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username } = req.body;

  try {
    const r = await fetch(
      `https://auth.roblox.com/v1/usernames/validate?request.username=${username}&request.birthday=1999-04-20`
    );

    const data = await r.json();

    return res.status(200).json({
      available: data.code === 0
    });

  } catch {
    return res.status(500).json({ error: true });
  }
}