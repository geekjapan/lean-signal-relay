# lean-signal-relay

This Vercel Edge Function receives trading signals from Lean Cloud and forwards them to a Cloudflare Worker for processing.

## Endpoints

- **POST /app/api/signal**: Relay signal to Worker
- **GET /app/api/signal**: Fetch last signal from Worker

## Deployment

- Requires Vercel account
- Connect this repo
- Auto-deploys on push
- Be sure to set `vercel.json` to use edge runtime

## Lean Integration

In your Lean strategy:
```python
url = "https://lean-signal-relay.vercel.app/api/signal"
requests.post(url, json={...})
```
