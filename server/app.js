require('dotenv').config();
const express = require('express');
const session = require('express-session');
const filesUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const petInfoRouter = require('./src/routes/pet.router');
const visitRouter = require('./src/routes/visit.router');
const userRouter = require('./src/routes/users.router');
const doctorRouter = require('./src/routes/doctors.router');
const allergyRouter = require('./src/routes/allergy.router');
const chronicRouter = require('./src/routes/chronic.router');
const vaccineRouter = require('./src/routes/vaccine.router');
const scheduleRouter = require('./src/routes/schedule.router');
const imgRouter = require('./src/routes/img.router');

const app = express();
const PORT = process.env.PORT || 3010;

const sessionConfig = {
  name: 'user_sid',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: null,
    httpOnly: true,
  },
};

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'images')));
app.use(filesUpload({}));
app.use(session(sessionConfig));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/pets', petInfoRouter);
app.use('/api/v1/doctors', doctorRouter);
app.use('/api/v1/allergy', allergyRouter);
app.use('/api/v1/chronic', chronicRouter);
app.use('/api/v1/vaccine', vaccineRouter);
app.use('/api/v1/schedule', scheduleRouter);
app.use('/api/v1/visits', visitRouter);
app.use('/api/v1/img', imgRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: http://localhost:${PORT}`);
});
