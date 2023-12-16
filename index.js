const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 5500; // Port for your primary server
const VITE_DEV_SERVER_URL = 'http://localhost:5501'; // URL of your Vite dev server

// Proxy requests to /web-app to the Vite dev server
app.use('/controle-a-reception', createProxyMiddleware({
  target: VITE_DEV_SERVER_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/web-app': '',
  },
}));

// Serve static files
app.use(express.static('.'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});