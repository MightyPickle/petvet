require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const docInfoRouter = require('./src/routes/docInfo.router');
const profilesRouter = require('./src/routes/profiles.router');
const categoriesRouter = require('./src/routes/categories.router');
const authRouter = require('./src/routes/auth.router');
const docFindRouter = require('./src/routes/docFind.router');

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
app.use('/api/v1/users/doctors', docInfoRouter);
app.use('/api/v1/doctor/profiles', profilesRouter);
app.use('/api/v1/doctor/categories', categoriesRouter);
app.use('/api/v1/doctors', docFindRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: http://localhost:${PORT}`);
});
