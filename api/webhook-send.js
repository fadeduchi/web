export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { user, score, url } = req.body;

  if (!url) return res.status(200).json({ ok: false });

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "flesh checker",
        avatar_url: "https://i.imgur.com/Gkkp1uH.jpeg",
        content: "",
        embeds: [{
          title: "username available",
          color: score >= 6 ? 16766720 : 65280,
          description: `**${user}**`,
          fields: [
            { name: "score", value: String(score), inline: true },
            { name: "claim", value: `https://www.roblox.com/signup?username=${user}`, inline: false }
          ]
        }]
      })
    });

    res.status(200).json({ ok: true });

  } catch (e) {
    res.status(500).json({ ok: false });
  }
}