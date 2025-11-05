const bodyParser = require ('body-parser');
const express = require ('express');
const app = express();
contador = 0;

app.use (bodyParser.json());
const lembretes = {};

app.get ('/lembretes', (req, res) => {
    res.send(lembretes);
});
app.put ('/lembretes', (req, res) => {
    contador++;
    const { texto } = req.body;
    lembretes[contador] = { contador, texto }
    res.status(201).send(lembretes[contador]);
});

app.listen(4000, () => {
console.log('Lembretes. Porta 4000');
});