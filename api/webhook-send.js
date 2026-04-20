export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { user, score, url } = req.body;

  if (!url) return res.status(200).json({ ok: false });

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [{
          title: "username available",
          description: `**${user}**`,
          color: score >= 6 ? 16766720 : 65280,
          fields: [
            { name: "score", value: String(score), inline: true },
            { name: "claim", value: `https://www.roblox.com/signup?username=${user}` }
          ]
        }]
      })
    });

    res.status(200).json({ ok: true });
  } catch {
    res.status(200).json({ ok: false });
  }
}