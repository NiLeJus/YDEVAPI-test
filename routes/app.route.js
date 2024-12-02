const express = require("express");
const router = express.Router();

// Route principale
router.get('/', (req, res) => {
    // Déclarez les chemins dynamique ici
    const contentPath = 'components/empty.component.ejs';
    const talkboxPath = 'components/empty.component.ejs';
  
    res.render('landing.view.ejs', { content: contentPath, talkbox: talkboxPath });
  });

// Route "/app"
app.get('/app', (req, res) => {
    console.log('Bonjour depuis la route exposée dans URL');
  
    const contentPath = 'components/empty.component.ejs';
    const talkboxPath = 'components/talkbox.component.ejs';
  
    res.render('landing.view.ejs', { content: contentPath, talkbox: talkboxPath });
  });

module.exports = router;