const http = require('http');
const fs = require('fs');
const path = require('path');

// Helper function to generate directory listing HTML
function generateDirectoryListing(dirPath, currentUrl) {
  const items = fs.readdirSync(dirPath);
  let html = `<h1>Directory Listing for ${currentUrl}</h1><ul>`;
  
  items.forEach(item => {
    const itemPath = path.join(dirPath, item);
    const itemUrl = path.join(currentUrl, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();
    
    if (isDirectory) {
      html += `<li>📁 <a href="${itemUrl}/">${item}</a></li>`;
    } else {
      html += `<li>🖹 <a href="${itemUrl}">${item}</a></li>`;
    }
  });
  
  html += '</ul>';
  return html;
}

// Create the HTTP server
const server = http.createServer((req, res) => {
  const requestedPath = decodeURIComponent(req.url);
  const filePath = path.join(__dirname, requestedPath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      // Handle 404 Not Found
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    } else if (stats.isDirectory()) {
      // Serve the directory listing
      const html = generateDirectoryListing(filePath, requestedPath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      // Serve the file content
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end('<h1>500 Server Error</h1>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(data);
        }
      });
    }
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
