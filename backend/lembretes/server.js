const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let contador = 0;
const lembretes = {};

app.get('/lembretes', (req, res) => {
  res.send(lembretes);
});

app.put('/lembretes', (req, res) => {
  contador++;
  const { texto } = req.body;
  lembretes[contador] = { contador, texto };
  res.status(201).send(lembretes[contador]);
});

app.listen(4000, () => {
  console.log('✅ Servidor de Lembretes rodando na porta 4000');
});