import { useState, useEffect } from 'react';
import axios from 'axios';

function useLembretes() {
  const [lembreteInput, setLembreteInput] = useState('');
  const [lembretes, setLembretes] = useState([]);

  // Carrega os lembretes ao iniciar
  useEffect(() => {
    axios.get('http://localhost:4000/lembretes')
      .then(res => {
        const dados = Object.values(res.data);
        setLembretes(dados.map(l => ({
          ...l,
          observacoes: [],
          observacaoInput: ''
        })));
      });
  }, []);

  // Adiciona novo lembrete
  const adicionarLembrete = () => {
    if (!lembreteInput.trim()) return;
    axios.put('http://localhost:4000/lembretes', { texto: lembreteInput })
      .then(res => {
        const novo = {
          ...res.data,
          observacoes: [],
          observacaoInput: ''
        };
        setLembretes([...lembretes, novo]);
        setLembreteInput('');
      });
  };

  const atualizarObservacaoInput = (id, valor) => {
    setLembretes(lembretes.map(l =>
      l.contador === id ? { ...l, observacaoInput: valor } : l
    ));
  };

  const adicionarObservacao = (id) => {
    setLembretes(lembretes.map(l => {
      if (l.contador === id && l.observacaoInput.trim()) {
        return {
          ...l,
          observacoes: [...l.observacoes, l.observacaoInput],
          observacaoInput: ''
        };
      }
      return l;
    }));
  };

  return {
    lembreteInput,
    setLembreteInput,
    lembretes,
    adicionarLembrete,
    atualizarObservacaoInput,
    adicionarObservacao
  };
}

export default useLembretes;