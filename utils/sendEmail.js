import { createTransport } from 'nodemailer';

async function sendEmail(to, subject, text) {
    let transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'yourEmail@gmail.com',
            pass: 'yourPassword'
        }
    });

    let mailOptions = {
        from: 'yourEmail@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        return info.response
    } catch (error) {
        console.log(error, error.message)
    }
}

export default sendEmail;