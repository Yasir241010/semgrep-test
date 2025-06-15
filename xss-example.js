const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`<p>Results for: ${query}</p>`); // ⚠️ Reflected XSS vulnerability
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
