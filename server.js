import express from 'express';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Infos OAuth2 (remplace par tes valeurs)
const CLIENT_ID = '607439050310-sf84mjjiqgmgpnkqobrm6mq4fjh2sao6.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04lsS_EgCPh_hCgYIARAAGAQSNwF-L9IryTFxQ0BD4iJR9XNK4LQWBYgk1o78_kMoVc-fAlFnz0YRUK9lfZQdLNSwkOe2AH6YguE'; // on le génère plus tard
const EMAIL = 'eternelcodeur@gmail.com';

// Créer OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    // Configure nodemailer transporter avec OAuth2
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: email,
      to: EMAIL,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone || 'non précisé'}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info.response);

    res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l’envoi de l’email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
