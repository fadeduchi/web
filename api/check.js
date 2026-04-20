export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username } = req.body;
  if (!username) return res.status(400).json({ error: "no username" });

  try {
    const r = await fetch("https://users.roblox.com/v1/usernames/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usernames: [username],
        excludeBannedUsers: true
      })
    });

    const data = await r.json();

    const exists = data?.data?.length > 0;

    res.status(200).json({
      available: !exists
    });

  } catch (e) {
    res.status(500).json({ available: false });
  }
}