import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Check if dist directory exists
const distPath = join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('Error: dist directory not found. Please run npm run build first.');
  process.exit(1);
}

// Serve static files from the dist directory
app.use(express.static(distPath));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  if (!fs.existsSync(indexPath)) {
    return res.status(404).send('Error: index.html not found in dist directory');
  }
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Serving static files from: ${distPath}`);
});