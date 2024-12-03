import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const app = express();
const port = 3000;
let server; 

app.use(express.json()); // Middleware pour parser les corps JSON

// Configurer le moteur de redus pour Expresse
app.set('view engine', 'ejs'); // Moteur de rendu
app.set('views', path.join(__dirname, 'app', 'views')); //! Les templates HTML/ejs doivent toujours être dans "views"

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'app'))); // Sert tous les fichiers dans "app" //* à switch à public en prod



// Routes + Utilisation 

import appRoutes from './routes/app/app.route.js'; app.use('/', appRoutes);                //Renvois client web et composants
import apiRoutes from './routes/api/api.route.js'; app.use('/api', apiRoutes);                //Renvois reste



// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});








// Route Calculate
app.get('/calculate', (req, res) => {
  res.render('landing.view.ejs', { content: 'components/calculate.component.ejs' });
});





