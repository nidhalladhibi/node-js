const fs = require('fs');

// Créer un fichier
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier créé avec succès.');

  // Lire le fichier
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu du fichier :', data);
  });
});
