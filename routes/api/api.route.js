import express from 'express';
import Calculator from './utils.js'; 

const router = express.Router();

//Logique commune
const handleCalculation = (req, res, dataSource) => {
    if (dataSource != 'query' && dataSource != 'body')
    {
        return res.status(500).send('Datasource needs to be query or body')
    }
  const { a, b, operation } = req[dataSource]; // 'query' pour URL, 'body' pour payload
  const calculation = Calculator(a, b, operation);

  if (calculation.error) {
    return res.status(400).send(calculation.error);
  }

  res.send(`Résultat: ${calculation.result}`);
};

// Route pour `/calculate-by-url`
router.get('/calculate-by-url', (req, res) => {
  handleCalculation(req, res, 'query'); // Traite les paramètres dans req.query
});

// Route pour `/calculate-by-payload`
router.post('/calculate-by-payload', (req, res) => {
  handleCalculation(req, res, 'body'); // Traite les paramètres dans req.body
});

export default router;
