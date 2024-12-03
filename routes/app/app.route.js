import express from 'express';
const router = express.Router();


//Déclaration composants
const emptyComponent = 'components/empty.component.ejs';
const requestHelloComponent = 'components/request-hello.component.ejs';
const requestCalculComponent = 'components/request-calcul.component.ejs';
const actionsComponent = 'components/actions.component.ejs';




// Route principale
router.get('/', (req, res) => {
    res.render('landing.view.ejs', { content: emptyComponent, talkbox: emptyComponent });
  });

// Route "/app"
router.get('/app', (req, res) => {
    console.log('Bonjour depuis la route exposée dans URL');
  
    res.render('landing.view.ejs', { content: emptyComponent, talkbox: actionsComponent });
  });

// // Route "/app"
// router.get('/hello-component', (req, res) => {
//   console.log('Bonjour');

//   res.render('landing.view.ejs', { content: emptyComponent, talkbox: requestHelloComponent });
// });

router.get('/hello-component', (req, res) => {
    // Pré-rendre 'hello.ejs' en contenu HTML

      // Injecter le contenu de 'hello.ejs' dans 'index.ejs'
      res.render(requestHelloComponent)
  });
  
  
router.get('/calcul-component', (req, res) => {
  // Pré-rendre 'hello.ejs' en contenu HTML

    // Injecter le contenu de 'hello.ejs' dans 'index.ejs'
    res.render(requestCalculComponent)
});

  export default router;