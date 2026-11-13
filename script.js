const STORAGE_KEY = "triagem-computadores-v1";
const form = document.querySelector("#triage-form");
const recordsElement = document.querySelector("#records");
const searchInput = document.querySelector("#search");

function loadRecords() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

let records = loadRecords();

function saveRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function getStatus(record) {
  const tests = ["power", "bios", "ramTest", "disk", "video", "network", "usb"];
  return tests.every((test) => record.tests[test]) ? "Aprovado" : "Com pendências";
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = records.filter((record) =>
    `${record.asset} ${record.model}`.toLowerCase().includes(query)
  );
  document.querySelector("#total").textContent = records.length;
  document.querySelector("#approved").textContent = records.filter((r) => getStatus(r) === "Aprovado").length;
  document.querySelector("#pending").textContent = records.filter((r) => getStatus(r) !== "Aprovado").length;

  recordsElement.replaceChildren();
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = records.length ? "Nenhum resultado para essa busca." : "Nenhum equipamento cadastrado ainda.";
    recordsElement.append(empty);
    return;
  }

  filtered.forEach((record) => {
    const card = document.createElement("article");
    card.className = "record";
    const top = document.createElement("div");
    top.className = "record-top";
    const info = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = `${record.asset} — ${record.model}`;
    const specs = document.createElement("p");
    specs.textContent = `CPU: ${record.cpu || "Não informado"} • RAM: ${record.ram || "Não informada"} • Armazenamento: ${record.storage || "Não informado"}`;
    const status = document.createElement("span");
    status.className = `pill ${getStatus(record) === "Aprovado" ? "ok" : "warn"}`;
    status.textContent = getStatus(record);
    info.append(title, specs);
    top.append(info, status);
    const notes = document.createElement("p");
    notes.textContent = `Observações: ${record.notes || "Nenhuma"} | Técnico: ${record.technician || "Não informado"}`;
    const bottom = document.createElement("div");
    bottom.className = "record-bottom";
    const date = document.createElement("small");
    date.textContent = `Registrado em ${new Date(record.createdAt).toLocaleString("pt-BR")}`;
    const remove = document.createElement("button");
    remove.className = "delete";
    remove.type = "button";
    remove.textContent = "Excluir";
    remove.addEventListener("click", () => {
      records = records.filter((item) => item.id !== record.id);
      saveRecords();
      render();
    });
    bottom.append(date, remove);
    card.append(top, notes, bottom);
    recordsElement.append(card);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const record = {
    id: crypto.randomUUID(),
    asset: data.get("asset").trim(),
    model: data.get("model").trim(),
    cpu: data.get("cpu").trim(),
    ram: data.get("ram").trim(),
    storage: data.get("storage").trim(),
    technician: data.get("technician").trim(),
    notes: data.get("notes").trim(),
    tests: {
      power: data.has("power"), bios: data.has("bios"), ramTest: data.has("ramTest"),
      disk: data.has("disk"), video: data.has("video"), network: data.has("network"), usb: data.has("usb")
    },
    createdAt: new Date().toISOString()
  };
  records.unshift(record);
  saveRecords();
  form.reset();
  render();
});

searchInput.addEventListener("input", render);
render();
