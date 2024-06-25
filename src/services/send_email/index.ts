import { toast } from 'react-toastify';

export const testeDeEnvio = () => {
    toast.error('deu erro ');
};

export const handleSubmitForms = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.error(`Ainda erro ${import.meta.env.VITE_USER_AND_FROM} ${import.meta.env.VITE_USER_PASSWD}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
};

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     host: 'smtp.office365.com',
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.USER_AND_FROM,
//         pass: process.env.USER_PASSWD
//     },
//     tls: {
//         ciphers: 'SSLv3'
//     }
// });

// const mailOptions = {
//     from: `"Meu Portfolio Enviou uma Mensagem" <${process.env.USER_AND_FROM}>`,
//     to: process.env.TO_SEND_FROM,
//     subject: 'Teste de E-mail',
//     text: 'Este é um e-mail de teste enviado usando Nodemailer com o Outlook!'
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log('Erro ao enviar e-mail: ', error);
//     }
//     console.log('E-mail enviado: ' + info.response);
// });
