const express = require('express');
const performCalculation = require('./calculator'); 

const router = express.Router();

// Route pour `/calculate-by-url`
router.get('/calculate-by-url', (req, res) => {
  const { a, b, operation } = req.query; 
  // .querry pour => requêtes POST, PUT, ou PATCH.

  const calculation = performCalculation(a, b, operation);

  if (calculation.error) {
    return res.status(400).send(calculation.error);
  }

  res.send(`Résultat: ${calculation.result}`);
});

// Route pour `/calculate-by-payload`
router.post('/calculate-by-payload', (req, res) => {
  const { a, b, operation } = req.body;
  // .body pour => requêtes POST, PUT, ou PATCH.
  // express.json() ou express.urlencoded() pour le traitement


  const calculation = performCalculation(a, b, operation);

  if (calculation.error) {
    return res.status(400).send(calculation.error);
  }

  res.send(`Résultat: ${calculation.result}`);
});

module.exports = router;




