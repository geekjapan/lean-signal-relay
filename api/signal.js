export const config = {
  runtime: 'edge'
};

export default async function handler(req) {
  const { method } = req;

  if (method === "POST") {
    try {
      const body = await req.json();
      const forward = await fetch("https://lean-signal-api.geekjapan.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const result = await forward.text();
      return new Response("Relayed: " + result, { status: 200 });
    } catch (err) {
      return new Response("Failed to relay: " + err.toString(), { status: 500 });
    }
  }

  if (method === "GET") {
    const resp = await fetch("https://lean-signal-api.geekjapan.workers.dev");
    const data = await resp.text();
    return new Response(data, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response("Method not allowed", { status: 405 });
}
