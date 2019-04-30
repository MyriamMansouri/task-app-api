const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'myriam.mansouri@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      
    sgMail.send(msg);
}

const sendCancelationEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'myriam.mansouri@gmail.com',
        subject: 'Sad to see you go',
        text: `Sad to see you go ${name}. We hope to see you soon.`,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      
    sgMail.send(msg);
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}