export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username } = req.body;

  try {
    const r = await fetch("https://users.roblox.com/v1/usernames/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernames: [username] })
    });

    const data = await r.json();
    res.status(200).json({ available: !data.data.length });
  } catch {
    res.status(200).json({ available: false });
  }
}