mkdir backend
cd backend
git clone https://github.com/ChiragBhargavaa/backendTemplate .
rm -rf .git
cd ..

## Email verification

Signup sends a verification link to the user's email. Configure:

- `BACKEND_URL` – backend base URL (e.g. `http://localhost:5400`) for verification links
- `FRONTEND_URL` or `FRONTEND_URLS` – frontend base URL (e.g. `http://localhost:5173`) for redirect after verify
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` – for sending verification emails

Run migrations: `npx prisma migrate dev` (or `prisma migrate deploy`). Then `npx prisma generate`.