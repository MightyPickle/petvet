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
    subject: 'Petvet',
    text: `Вы записаны к доктору ${doctor}, дата и время приёма: ${date}`,
  };
  const result = await transporter.sendMail(mailOptions, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });
  return result;
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
    subject: 'Petvet',
    text: `К вам записан(а) на прием ${owner}, дата и время приёма: ${date}`,
  };
  const result = await transporter.sendMail(mailOptions, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });
  return result;
}

module.exports = { mailToOwner, mailToDoctor };
