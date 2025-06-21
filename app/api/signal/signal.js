export const runtime = 'edge';

export async function POST(req) {
  const body = await req.json();
  try {
    const res = await fetch("https://lean-signal-api.geekjapan.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const result = await res.text();
    return new Response("Relayed: " + result, { status: 200 });
  } catch (err) {
    return new Response("Relay failed: " + err.toString(), { status: 500 });
  }
}

export async function GET() {
  const res = await fetch("https://lean-signal-api.geekjapan.workers.dev");
  const data = await res.text();
  return new Response(data, {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
