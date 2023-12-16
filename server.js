const cors_anywhere = require('cors-anywhere');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

cors_anywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: [],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log(`CORS Anywhere is running on ${host}:${port}`);
});
