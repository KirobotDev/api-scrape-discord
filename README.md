
# Discord Mega Scraper

A professional, modular Discord bot for fetching usernames from user IDs using the official Discord API. Built for scalability, maintainability, and compliance with API limits.

## Features
- Fetch usernames for random or provided Discord IDs.
- Advanced rate limit handling with queues.
- Local and in-memory caching to optimize API usage.
- SQLite database for persistent storage (optional).
- Express API for external triggering (optional).
- Comprehensive logging and error handling.
- Unit and integration tests with Jest.
- CI/CD pipeline with GitHub Actions.
- Linting and formatting with ESLint and Prettier.

## Prerequisites
- Node.js (v16 or higher)
- A Discord bot token from [Discord Developer Portal](https://discord.com/developers/applications)
- SQLite (optional, for persistent storage)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kirobotdev/api-scrape-discord.git
   cd discord-mega-scraper
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `src/config/index.js` file:
   ```javascript
   module.exports = {
     discordToken: 'YOUR_BOT_TOKEN',
     maxRequestsPerSecond: 1,
     logLevel: 'info',
     dbPath: './data/database.sqlite',
     apiPort: 3000,
   };
   ```
4. Run the bot:
   ```bash
   npm start
   ```

## Usage
- Invite the bot to a server with permissions for sending messages and slash commands.
- Use slash commands:
  - `/scrape_random count:<number>`: Fetch usernames for random IDs (1-50).
  - `/scrape_list ids:<id1,id2,...>`: Fetch usernames for a comma-separated list of IDs.
- Check logs in `data/logs/app.log` and cache in `data/cache/cache.json`.

## Development
- Run tests: `npm test`
- Lint code: `npm run lint`
- Format code: `npm run format`
- Deploy: `npm run deploy` (configure in `scripts/deploy.js`)

## Notes
- **Rate Limits**: Uses `p-queue` to enforce 1 request/second, respecting Discord's ~50 requests/minute limit.
- **Ethics**: Random ID scraping is inefficient and may violate Discord's ToS without consent. Use legitimate ID sources (e.g., server members or user interactions).
- **Extensibility**: Add new commands in `src/bot/commands/`, models in `src/database/models/`, or API routes in `src/api/routes/`.

## License
MIT
