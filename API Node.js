const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/calculate-imc', (req, res) => {
  const { weight, height } = req.body;
  const bmi = weight / (height * height);
  let dietRecommendation = '';
  let menuRecommendation = '';

  if (bmi < 18.5) {
    dietRecommendation = 'Você está abaixo do peso. Tente consumir alimentos ricos em proteínas e calorias para ganhar peso.';
    menuRecommendation = 'Menu recomendado: Café da manhã: Omelete com vegetais; Almoço: Frango grelhado com arroz integral e legumes; Jantar: Salmão assado com batata doce e brócolis.';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    dietRecommendation = 'Você está com peso normal. Continue com uma dieta equilibrada e pratique exercícios regularmente.';
    menuRecommendation = 'Menu recomendado: Café da manhã: Aveia com frutas e iogurte; Almoço: Salada verde com frango grelhado; Jantar: Peixe cozido com quinoa e legumes.';
  } else if (bmi >= 25 && bmi < 29.9) {
    dietRecommendation = 'Você está com sobrepeso. Reduza a ingestão de calorias e faça exercícios regularmente.';
    menuRecommendation = 'Menu recomendado: Café da manhã: Smoothie de frutas e vegetais; Almoço: Sanduíche de peru e salada; Jantar: Espaguete integral com molho de tomate caseiro.';
  } else {
    dietRecommendation = 'Você está obeso. Consulte um nutricionista para um plano de dieta personalizado.';
    menuRecommendation = 'Menu recomendado: Café da manhã: Omelete de claras com espinafre; Almoço: Salada de grãos com frango grelhado; Jantar: Sopa de legumes com carne magra.';
  }

  res.json({ bmi, dietRecommendation, menuRecommendation });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
