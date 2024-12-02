const express = require('express');
const router = express.Router();

// API pour effectuer les calculs
router.get('/calculate-by-url', (req, res) => {
  const { a, b, operation } = req.query;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).send('Des chiffres stp frere');
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
        return res.status(400).send('Division par zéro srx ? noob');
      }
      result = numA / numB;
      break;

    case 'always42': 
      result = 42
      break;

    default:
      return res.status(400).send('Erreur : Default case hit but should not');
  }

  res.send(`Résultat: ${result}`);
});

router.get('/calculate-by-payload', (req, res) => {
  const { a, b, operation } = req.query;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).send('Des chiffres stp frere');
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
        return res.status(400).send('Division par zéro srx ? noob');
      }
      result = numA / numB;
      break;

    case 'always42': 
      result = 42
      break;

    default:
      return res.status(400).send('Erreur : Default case hit but should not');
  }

  res.send(`Résultat: ${result}`);
});

 module.exports = router;
