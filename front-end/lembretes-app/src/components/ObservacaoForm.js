function ObservacaoForm({ value, onChange, onSubmit }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Adicionar observação"
      />
      <button onClick={onSubmit}>Adicionar</button>
    </div>
  );
}

export default ObservacaoForm;