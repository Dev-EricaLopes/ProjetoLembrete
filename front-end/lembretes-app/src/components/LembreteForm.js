function LembreteForm({ value, onChange, onSubmit }) {
  return (
    <div>
      <h2>Novo Lembrete</h2>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Digite um lembrete"
      />
      <button onClick={onSubmit}>Enviar</button>
    </div>
  );
}

export default LembreteForm;