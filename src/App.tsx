import { useState } from 'react';
import './App.css';

function App() {
  // State para armazenar o valor exibido
  const [displayValue, setDisplayValue] = useState("Rolar");

  // Função para alternar entre gerar um valor e resetar
  function handleClick() {
    
    if (displayValue === "Rolar") {
      // Gerar um novo valor aleatório
      const values = ["50%", "10%", "15%", "20%"];
      const weights = [0.05, 0.5, 0.3, 0.15];

      const random = Math.random();

      let cumulativeWeight = 0;
      let selectedValue = "";
      
      for (let i = 0; i < values.length; i++) {
        cumulativeWeight += weights[i];
        if (random < cumulativeWeight) {
          selectedValue = values[i];
          break;
        }
      }

      setDisplayValue(selectedValue);
    } else {
      // Resetar para "Rolar"
      setDisplayValue("Rolar");
    }
  }

  return (
    <div style={{ backgroundColor: "white", width: "100%", alignContent: "center", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexDirection: "column",
        }}
      >
        {/* Texto dinâmico */}
        <h1
          style={{
            position: "absolute",
            fontSize: "150px",
            padding: "1rem",
            userSelect: "none",
          }}
          onClick={handleClick} // Trocar ou resetar o valor ao clicar
        >
          {displayValue}
        </h1>
        <img src="Pan_Blue_Circle.png" style={{ width: "100%" }} alt="Imagem decorativa" />
      </div>
    </div>
  );
}

export default App;
