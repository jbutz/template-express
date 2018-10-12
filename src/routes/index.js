const express = require('express');
const helloWorldRouter = require('./helloWorld');
const router = express.Router();

router.use('/api', helloWorldRouter);

module.exports = router;
