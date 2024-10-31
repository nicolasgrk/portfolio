import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { firstname, lastname, email, phone, service, message } = req.body;

  // Configurer le transporteur SMTP avec Hostinger
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Assurez-vous que ce soit bien le serveur SMTP de Hostinger
    port: 465, // Utilisez 465 pour une connexion sécurisée, sinon utilisez 587 pour TLS
    secure: true, // Utilisez true pour le port 465, false pour le port 587
    auth: {
      user: 'contact@nicolasgurak.fr', // ton adresse email
      pass: '1509Nico$', // mot de passe du compte ou mot de passe d'application
    },
  });

  try {
    await transporter.sendMail({
      from: 'contact@nicolasgurak.fr',
      to: 'nicolasgurak@gmail.com', // destinataire du message (toi-même)
      subject: `Demande de service: ${service}`,
      text: `Nom: ${firstname} ${lastname}\nEmail: ${email}\nTéléphone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur d\'envoi d\'email:', error);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email", error });
  }
}
