const bodyParser = require ('body-parser');
const express = require ('express');
const app = express();
app.use (bodyParser.json());

const { v4: uuidv4 } = require('uuid');
const observacoesPorLembreteId = {};

app.put('lembretes/:id/observacoes', (req, res) => {
    const idbs = uuidv4();
    const { texto } = req.body;

    const observacoesDoLembrete = 
   observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({ id: idbs, texto });
    observacoesPorLembreteId[req.params.id] = 
                            observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete);
});
app.get('lembretes/:id/observacoes', (req, res) => {

});

app.listen(5000, () => {
console.log('Observações. Porta 5000');
});