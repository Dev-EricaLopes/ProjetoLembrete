function createlembrete() {
  const input = document.getElementById("newlembrete");
  const title = input.value.trim();
  if (title === "") return;

  const container = document.getElementById("lembreteContainer");

  // Criar elementos do card
  const card = document.createElement("div");
  card.className = "lembrete-card";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const obsCount = document.createElement("p");
  obsCount.textContent = "0 observações";

  const obsList = document.createElement("ul");

  const obsInputDiv = document.createElement("div");
  obsInputDiv.className = "observation-input";

  const obsInput = document.createElement("input");
  obsInput.placeholder = "Adicionar observação...";

  const obsButton = document.createElement("button");
  obsButton.textContent = "Adicionar";
  obsButton.onclick = () => {
    const text = obsInput.value.trim();
    if (text === "") return;
    const li = document.createElement("li");
    li.textContent = text;
    obsList.appendChild(li);
    obsInput.value = "";
    obsCount.textContent = `${obsList.children.length} observações`;
  };

  // Montar card
  obsInputDiv.appendChild(obsInput);
  obsInputDiv.appendChild(obsButton);

  card.appendChild(heading);
  card.appendChild(obsCount);
  card.appendChild(obsList);
  card.appendChild(obsInputDiv);

  container.appendChild(card);
  input.value = "";
}