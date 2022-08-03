const nodemailer = require('nodemailer');

async function mailToOwner(email, doctor, date) {
  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mypetvet2022@gmail.com',
      pass: 'sgnugvzpjfqjsaro',
    },
  });
  const mailOptions = {
    from: 'mypetvet2022@gmail.com',
    to: `${email}`,
    subject: 'Запись на прием - PetVet',
    text: `Вы записаны к доктору ${doctor}, дата и время приёма: ${date}`,
  };
  transporter.sendMail(mailOptions, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });
}

async function mailToDoctor(email, owner, date) {
  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mypetvet2022@gmail.com',
      pass: 'sgnugvzpjfqjsaro',
    },
  });
  const mailOptions = {
    from: 'mypetvet2022@gmail.com',
    to: `${email}`,
    subject: 'Запись на прием - PetVet',
    text: `К вам записан(а) на прием ${owner}, дата и время приёма: ${date}`,
  };
  transporter.sendMail(mailOptions, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });
}

module.exports = { mailToOwner, mailToDoctor };
