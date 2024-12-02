const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    // Pré-rendre 'hello.ejs' en contenu HTML
    res.render('hello', (err, helloContent) => {
      if (err) {
        return res.status(500).send('Erreur lors du rendu de la page hello.');
      }
      // Injecter le contenu de 'hello.ejs' dans 'index.ejs'
      res.render('index', { content: helloContent });
    });
  });
  
module.exports = router;
