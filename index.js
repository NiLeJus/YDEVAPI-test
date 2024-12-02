import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const app = express();
const port = 3000;
let server; 

// Configurer le moteur de redus pour Expresse
app.set('view engine', 'ejs'); // Moteur de rendu
app.set('views', path.join(__dirname, 'app', 'views')); // Les templates HTML doivent toujours être dans "views"

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'app'))); // Sert tous les fichiers dans "app" //* à switch à public en prod

// // Route principale
// app.get('/', (req, res) => {
//   // Déclarez les chemins dynamique ici
//   const contentPath = 'components/empty.component.ejs';
//   const talkboxPath = 'components/empty.component.ejs';

//   res.render('landing.view.ejs', { content: contentPath, talkbox: talkboxPath });
// });

// Route "/app"
app.get('/app', (req, res) => {
  console.log('Bonjour depuis la route exposée dans URL');

  const contentPath = 'components/empty.component.ejs';
  const talkboxPath = 'components/talkbox.component.ejs';

  res.render('landing.view.ejs', { content: contentPath, talkbox: talkboxPath });
});


app.get('/json-message', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'message.json'); // Chemin du fichier JSON
    const jsonData = JSON.parse(data); // Convertir le fichier en objet JSON
    res.json(jsonData); // Envoyer la réponse JSON
});
timestamp: new Date().toISOString(),

// Route hello
app.get('/hello', (req, res) => {
  console.log('Bonjour depuis la route exposée dans URL');
  res.render('landing.view.ejs', { content: 'components/hello.component.ejs', talkbox:  '' });
});

// 
app.get('/hello-discret', (req, res) => {
  console.log('Bonjour depuis une route non exposée dans URL');
  res.render('components/hello-discret.component.ejs');
});

// Route Calculate
app.get('/calculate', (req, res) => {
  res.render('landing.view.ejs', { content: 'components/calculate.component.ejs' });
});

//Route Message
app.get('/message', (req, res) => {
  console.log('Bonjour depuis une route non exposée dans URL');
  res.render('components/hello-discret.component.ejs');
});

// Route pour arrêter le serveur
app.get('/shutdown', (req, res) => {
  res.send('Le serveur va s\'arrêter');
  server.close(() => {
    console.log('Serveur arrêté');
  });
});


// Routes + Utilisation 
const appRoutes = require('./routes/app.routes.js'); app.use('/', appRoutes); //Renvois client web et composants
const apiRoutes = require('./routes/api.routes.js'); app.use('/api', apiRoutes); //


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});



