// const express = require('express');
// const router = express.Router();
// const cors = require('cors')
// const nodemailer = require('nodemailer')

// //servidor para enviar mails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/', router);
// app.listen(5000, () => console.log('Server listening'));
// // console.log(process.env.EMAIL_USER);
// // console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'gabrielkpo774@gmail.com',
//         pass: 'mzbldlxhxfnaaxxv'
//     },
// });

// contactEmail.verify((error) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log('Listo para enviar')
//     }
// });

// router.post('/contact', (req, res) => {
//     const name = req.body.firstName + req.body.lastName;
//     const email = req.body.email
//     const message = req.body.message
//     const mail = {
//         from: name,
//         to: 'gabrielkpo774@gmail.com',
//         subject: 'Contacto desde portafolio',
//         html: `<p>Name: ${name} </p>
//                 <p>Email: ${email} </p>
//                 <p>Message: ${message} </p>`
//     }

// contactEmail.sendMail(mail, (error) => {
//     if(error) {
//         res.json(error);
//     } else {
//         res.json({ code: 200, status: "Mensaje enviado" })
//     }
//     })
// });