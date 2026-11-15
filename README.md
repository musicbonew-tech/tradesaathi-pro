# TradeSaathi Pro Backend — starter

Minimal Node.js/Express backend scaffold.

## Endpoints
- `GET /` — API information
- `GET /health` — health check
- `GET /api/angel/status` — reports whether an API key is configured; does not connect to Angel One

## Not implemented yet
Live market data/WebSocket, Angel One SmartAPI session/login, options chain, market depth, AI analysis, and order placement. This is not a live trading connection.

## Render deployment
1. Upload all files in this ZIP to the root of the existing `tradesaathi-pro` GitHub repository, alongside `index.html`.
2. In Render, connect the same repository as a Web Service.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Keep Root Directory blank (repository root). Choose the Free instance if available.

Requires Node.js 20+. Do not put passwords, PINs, OTP/TOTP, API secrets, JWTs, refresh tokens, or feed tokens in GitHub or chat.
