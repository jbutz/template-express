const cookieParser = require('cookie-parser');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const winston = require('winston');
const routes = require('./routes');

const cookieSecret = process.env.SESSION_SECRET || 'keyboard cat';

const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

const app = express();
app.use(helmet());
app.use(morgan('dev', {
    stream: {
        write: (message) => logger.info(message.trim()),
    },
}));

app.use(session({ secret: cookieSecret, resave: true, saveUninitialized: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser({ secret: cookieSecret }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/', routes);

module.exports = app;