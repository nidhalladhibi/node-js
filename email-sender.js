const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Ou utilisez un autre service (yahoo, outlook, etc.)
  auth: {
    user: 'soldenidhal@gmail.com', // Remplacez par votre email
    pass: 'BMW007vabene',      // Remplacez par votre mot de passe
  },
  tls: {
    rejectUnauthorized: false, // Ignore les problèmes de certificat
  },
});

const mailOptions = {
  from: 'soldenidhal@gmail.com',
  to: 'www.nidhal.com@gmail.com',
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
