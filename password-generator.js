const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 12,
  numbers: true,
});

console.log('Mot de passe généré :', password);
