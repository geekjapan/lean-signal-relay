export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const forward = await fetch("https://lean-signal-api.geekjapan.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      });

      const result = await forward.text();
      return res.status(200).send("Relayed: " + result);
    } catch (err) {
      return res.status(500).send("Failed to relay: " + err.toString());
    }
  }

  if (req.method === "GET") {
    const resp = await fetch("https://lean-signal-api.geekjapan.workers.dev");
    const data = await resp.text();
    return res.status(200).send(data);
  }

  res.status(405).send("Method not allowed");
}
