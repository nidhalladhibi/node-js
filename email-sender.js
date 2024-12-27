const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Ou utilisez un autre service (yahoo, outlook, etc.)
  auth: {
    user: '********@gmail.com', // Remplacez par votre email
    pass: '*******',      // Remplacez par votre mot de passe
  },
  tls: {
    rejectUnauthorized: false, // Ignore les problèmes de certificat
  },
});

const mailOptions = {
  from: 's*****@gmail.com',
  to: '******m@gmail.com',
  subject: 'Test',
  text: 'Bonjour, ceci est un test!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé : ' + info.response);
  }
});
