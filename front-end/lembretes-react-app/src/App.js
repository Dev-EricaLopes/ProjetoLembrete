import './App.css';
import useLembretes from './hooks/useLembretes';
import LembreteForm from './components/LembreteForm';
import LembreteCard from './components/LembreteCard';

function App() {
  const {
    lembreteInput,
    setLembreteInput,
    lembretes,
    adicionarLembrete,
    atualizarObservacaoInput,
    adicionarObservacao
  } = useLembretes();

  return (
    <div className="container">
      <LembreteForm
        value={lembreteInput}
        onChange={e => setLembreteInput(e.target.value)}
        onSubmit={adicionarLembrete}
      />

      <div className="cards">
        {lembretes.map(lembrete => (
          <LembreteCard
            key={lembrete.id}
            lembrete={lembrete}
            onObservacaoChange={atualizarObservacaoInput}
            onObservacaoSubmit={adicionarObservacao}
          />
        ))}
      </div>
    </div>
  );
}

export default App;