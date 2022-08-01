require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const docInfoRouter = require('./src/routes/docInfo.router');
const petInfoRouter = require('./src/routes/pet.router');
const authRouter = require('./src/routes/auth.router');
const visitRouter = require('./src/routes/visit.router');

const userRouter = require('./src/routes/users.router');
const { doctorRouter } = require('./src/routes/doctor.router');

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
app.use(session(sessionConfig));

app.use('/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users/doctors', docInfoRouter);
app.use('/api/v1/pets', petInfoRouter);
app.use('/api/v1/visits', visitRouter);
app.use('/api/v1/doctors', doctorRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: http://localhost:${PORT}`);
});
