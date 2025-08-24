# Node CI/CD Assignment — Todo App

## Project
Simple Todo app (Express + static `index.html`) that supports listing, adding, deleting tasks.

## CI (GitHub Actions)
- Trigger: `push` to `main`.
- Steps:
  1. Checkout
  2. Install dependencies (`npm ci`)
  3. Lint (`npm run lint`)
  4. Test (`npm test`)
  5. Build (`npm run build`) — produces `dist/`
  6. Zip `dist/` and upload artifact `app-dist`

## CD (GitHub Actions, self-hosted runner)
- Trigger: automatically after CI succeeds .
- Runs on a **self-hosted runner**.
- Steps:
  1. Download `app-dist` artifact from CI run
  2. Unzip to `deploy/`
  3. Install production dependencies (`npm ci --omit=dev`)
  4. Start the app with `pm2` 
- Environment variables are set in the workflow under `env:` (e.g., `PORT`, `APP_MESSAGE`).

## How to run locally
1. `npm install`
2. `npm start`
3. Open `http://localhost:3000`

