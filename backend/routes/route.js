const express = require('express');
const router = require('express').Router();
const userRoute = require('./users');
const cardRoute = require('./cards');
const NotFound = require('../error/NotFound');

router.use(express.json());

router.use('/users', userRoute);
router.use('/cards', cardRoute);
router.use((req, res, next) => {
  next(new NotFound('Такая страница не существует'));
});

module.exports = router;
