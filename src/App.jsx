import { useState } from "react";

const processors = [
  { name: "i7", price: 50000, image: "i7.jpg" },
  { name: "i9", price: 75000, image: "i9.jpg" },
  { name: "Ryzen7", price: 60000, image: "ryzen7.jpg" },
  { name: "Ryzen9", price: 200000, image: "ryzen9.jpg" },
];

const graphicsCards = [
  { name: "GeForce RTX 5050 WINDFORCE OC 8G", price: 150000, image: "rtx5050.jpg" },
  { name: "RTX 3060 12 GB", price: 180000, image: "rtx3060.jpg" },
  { name: "Radeon RX 7600 8 GB", price: 140000, image: "rx7600.jgp" },
];

const storages = [
  { name: "Kingston 480 GB SSD", price: 32000, image: "480ssd.jpg" },
  { name: "Kingston 960 GB SSD", price: 56000, image: "960ssd.jpg" },
  { name: "Kingston FURY Renegade G5 2TB", price: 140000, image: "2TBssd.jpg" },
  { name: "Western Digital Blue 3.5 1TB", price: 43000, image: "1TBhdd.jpg" },
];

const memories = [
  { name: "16 Gb - DDR4", price: 50000, image: "memory4.jpg" },
  { name: "32 Gb - DDR4", price: 250000, image: "memory4.jpg" },
  { name: "64 Gb - DDR4", price: 400000, image: "memory4.jpg" },
  { name: "16 Gb - DDR5", price: 70000, image: "memory5.jpg" },
  { name: "32 Gb - DDR5", price: 250000, image: "memory5.jpg" },
  { name: "64 Gb - DDR5", price: 500000, image: "memory5.jpg" },
];

const cases = [
  { name: "Egyszerű fekete ház", price: 18000, image: "blackCase.jpg" },
  { name: "Üveg oldallapos ház", price: 20000, image: "blackCaseSideGlass.jpg" },
  { name: "Gamer ház RGB világítással", price: 25000, image: "RGBcase.jpg" },
];

const powerSupplies = [
  { name: "Be Quiet! System Power 11 550W PSU", price: 23000, image: "550wPSU.jpg" },
  { name: "Be Quiet! System Power 11 650W PSU", price: 26000, image: "650wPSU.jpg" },
  { name: "Be Quiet! System Power 11 750W PSU", price: 33000, image: "750wPSU.jpg" },
];

const mice = [
  { name: "Egyszerű vezetékes egér", price: 3000, image: "mouse.svg" },
  { name: "Vezeték nélküli egér", price: 5000, image: "mouse.svg" },
  { name: "Gamer egér", price: 9000, image: "mouse.svg" },
];

const keyboards = [
  { name: "Vezetékes billentyűzet", price: 4000, image: "keyboard.svg" },
  { name: "Vezeték nélküli billentyűzet", price: 7000, image: "keyboard.svg" },
  { name: "Mechanikus gamer billentyűzet", price: 15000, image: "keyboard.svg" },
];

const printers = [
  { name: "Tintasugaras nyomtató", price: 18000, image: "printer.svg" },
  { name: "Lézernyomtató", price: 40000, image: "printer.svg" },
];

const webcams = [
  { name: "HD webkamera", price: 8000, image: "webcam.svg" },
  { name: "Full HD webkamera", price: 15000, image: "webcam.svg" },
];

function ComponentSelector({ name, options, selectedOption, onSelect }) {
  return (
    <section className="component-section">
      <h2>{name}</h2>
      <div className="options">
        {options.map((option) => (
          <button
            key={option.name}
            type="button"
            onClick={() => onSelect(option)}
            className={
              selectedOption?.name === option.name
                ? "option-button selected"
                : "option-button"
            }
          >
            <img
              src={`./assets/${option.image}`}
              alt=""
              width="70"
              height="70"
            />
            <span>{option.name}</span>
            <strong>{option.price.toLocaleString("hu-HU")} Ft</strong>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [processor, setProcessor] = useState(null);
  const [graphicsCard, setGraphicsCard] = useState(null);
  const [storage, setStorage] = useState(null);
  const [memory, setMemory] = useState(null);
  const [computerCase, setComputerCase] = useState(null);
  const [powerSupply, setPowerSupply] = useState(null);
  const [mouse, setMouse] = useState(null);
  const [keyboard, setKeyboard] = useState(null);
  const [printer, setPrinter] = useState(null);
  const [webcam, setWebcam] = useState(null);

  const totalPrice =
    (processor?.price || 0) +
    (graphicsCard?.price || 0) +
    (storage?.price || 0) +
    (memory?.price || 0) +
    (computerCase?.price || 0) +
    (powerSupply?.price || 0) +
    (mouse?.price || 0) +
    (keyboard?.price || 0) +
    (printer?.price || 0) +
    (webcam?.price || 0);

  function clearSelections() {
    setProcessor(null);
    setGraphicsCard(null);
    setStorage(null);
    setMemory(null);
    setComputerCase(null);
    setPowerSupply(null);
    setMouse(null);
    setKeyboard(null);
    setPrinter(null);
    setWebcam(null);
  }

  return (
    <main className="app">
      <h1>PC konfigurátor</h1>
      <p>Válaszd ki a számítógép alkatrészeit!</p>

      <ComponentSelector
        name="Processzor"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />
      <ComponentSelector
        name="Videokártya"
        options={graphicsCards}
        selectedOption={graphicsCard}
        onSelect={setGraphicsCard}
      />
      <ComponentSelector
        name="Tárhely"
        options={storages}
        selectedOption={storage}
        onSelect={setStorage}
      />
      <ComponentSelector
        name="Memória"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />
      <ComponentSelector
        name="Ház"
        options={cases}
        selectedOption={computerCase}
        onSelect={setComputerCase}
      />
      <ComponentSelector
        name="Tápegység"
        options={powerSupplies}
        selectedOption={powerSupply}
        onSelect={setPowerSupply}
      />
      <ComponentSelector
        name="Egér"
        options={mice}
        selectedOption={mouse}
        onSelect={setMouse}
      />
      <ComponentSelector
        name="Billentyűzet"
        options={keyboards}
        selectedOption={keyboard}
        onSelect={setKeyboard}
      />
      <ComponentSelector
        name="Nyomtató"
        options={printers}
        selectedOption={printer}
        onSelect={setPrinter}
      />
      <ComponentSelector
        name="Webkamera"
        options={webcams}
        selectedOption={webcam}
        onSelect={setWebcam}
      />

      <hr />
      <h2>Teljes ár: {totalPrice.toLocaleString("hu-HU")} Ft</h2>
      <button className="clear-button" type="button" onClick={clearSelections}>
        Kiválasztások törlése
      </button>
    </main>
  );
}
