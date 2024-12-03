// Route principale
app.get('/', (req, res) => {
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

app.get('/json-message', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'message.json'); // Chemin du fichier JSON
    const jsonData = JSON.parse(data); // Convertir le fichier en objet JSON
    res.json(jsonData); // Envoyer la réponse JSON
});

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









