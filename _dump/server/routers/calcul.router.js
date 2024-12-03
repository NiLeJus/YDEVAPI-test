const express = require('express');
const router = express.Router();

 // Page de calcul
router.get('/calcul', (req, res) => {
    // Préparer 
    res.render('calcul', (err, calculContent) => {
      if (err) {
        return res.status(500).send('Erreur lors du rendu de la page Calcul.');
      }
    // Injecter dans content
      res.render('landing.view', { content: calculContent });
    });
  });
  
// // API pour effectuer les calculs
router.get('/api', (req, res) => {
  const { a, b, operation } = req.query;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).send('Veuillez entrer des nombres valides.');
  }

  let result;
  
  switch (operation) {
    case 'add':
      result = numA + numB;
      break;

    case 'subtract':
      result = numA - numB;
      break;

    case 'multiply':
      result = numA * numB;
      break;

    case 'divide':
      if (numB === 0) {
        return res.status(400).send('Division par zéro non autorisée.');
      }
      result = numA / numB;
      break;

    case 'always42': 
      result = 42
      break;

    default:
      return res.status(400).send('Opération invalide.');
  }

  res.send(`Résultat: ${result}`);
});

 module.exports = router;
