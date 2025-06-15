const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const term = req.query.term;
  res.send(`<div>Searched for: ${term}</div>`); // ⚠️ Vulnerable: raw input in HTML response
});

app.listen(4000, () => {
  console.log('App running on port 4000');
});
