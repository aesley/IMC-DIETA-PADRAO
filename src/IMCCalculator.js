import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Importando os estilos CSS

function IMCCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [dietRecommendation, setDietRecommendation] = useState('');
  const [menuRecommendation, setMenuRecommendation] = useState('');

  const calculateIMC = async () => {
    try {
      const response = await axios.post('http://localhost:3000/calculate-imc', {
        weight: parseFloat(weight),
        height: parseFloat(height)
      });
      setResult(response.data.bmi);
      setDietRecommendation(response.data.dietRecommendation);
      setMenuRecommendation(response.data.menuRecommendation);
    } catch (error) {
      console.error('Erro ao calcular IMC:', error);
    }
  };

  return (
    <div className="container"> {/* Usando a classe CSS 'container' */}
      <h2 className="heading">Calculadora de IMC</h2>
      <div className="inputContainer"> {/* Usando a classe CSS 'inputContainer' */}
        <label className="label">Peso (kg): </label>
        <input
          className="input" 
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="inputContainer"> {/* Usando a classe CSS 'inputContainer' */}
        <label className="label">Altura (m): </label>
        <input
          className="input" 
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className="button" onClick={calculateIMC}>Calcular IMC</button> {/* Usando a classe CSS 'button' */}
      {result && <p className="result">Seu IMC é: {result.toFixed(2)}</p>} {/* Usando a classe CSS 'result' */}
      {dietRecommendation && <p className="diet">Recomendação de Dieta: {dietRecommendation}</p>} {/* Nova classe CSS 'diet' */}
      {menuRecommendation && <p className="menu">Cardápio Recomendado: {menuRecommendation}</p>} {/* Nova classe CSS 'menu' */}
    </div>
  );
}

export default IMCCalculator;
