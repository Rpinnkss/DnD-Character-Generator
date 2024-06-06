const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

// Middleware per abilitare CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permetti tutte le origini
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

// Endpoint per il proxy
app.get('/get-fake-name', async (req, res) => {
  try {
    const response = await fetch('https://api.namefake.com');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Errore nel recuperare i dati' });
  }
});

app.listen(port, () => {
  console.log(`Server in esecuzione sulla porta ${port}`);
});
