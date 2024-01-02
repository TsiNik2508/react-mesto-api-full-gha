require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const router = require('./routes/route');
const auth = require('./middlewares/auth');
const { MONGO_URL } = require('./config');
const corsEr = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();
app.use(cors());
app.use(bodyParser.json());
const { validateSignup, validateSignin } = require('./middlewares/validate');

const { createUser, login } = require('./controllers/auth');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(requestLogger);
app.post('/signin', validateSignin, login);
app.post('/signup', validateSignup, createUser);
app.use(auth);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(router);
app.use(helmet());
app.use(limiter);
app.use(errorLogger);
app.use(corsEr);
async function connect() {
  try {
    await mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log(`App connect ${MONGO_URL}`);
    await app.listen(PORT);
    console.log(`App listen on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
}
app.use(errors());
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });
  next();
});

connect();
