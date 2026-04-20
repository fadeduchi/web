export default async function handler(req, res) {
  try {
    const { username } = req.body;

    const r = await fetch("https://users.roblox.com/v1/usernames/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernames: [username] })
    });

    const data = await r.json();

    if (!data.data || !data.data.length) {
      return res.status(200).json({ found: false });
    }

    const user = data.data[0];

    return res.status(200).json({
      found: true,
      id: user.id,
      name: user.name
    });

  } catch (e) {
    return res.status(500).json({ error: true });
  }
}