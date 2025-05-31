// Simple Hello World server using Node.js
const http = require('http');

const hostname = '0.0.0.0'; // Listen on all network interfaces for LAN/WAN access
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Student AI Server</title>
      </head>
      <body>
        Hello World from student-ai-server!<br>
        Accessible on your network at: <script>document.write(window.location.href);</script>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
