/* eslint-disable no-undef */
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';

import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(helmet());

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", 'https://www.googletagmanager.com'],
            styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
            imgSrc: ["'self'", 'data:', 'https://raw.githubusercontent.com', 'https://pro.fontawesome.com'],
            connectSrc: ["'self'"],
            fontSrc: ["'self'", 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
            objectSrc: ["'none'"],
            frameSrc: ["'none'"],
        },
    }),
);

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

const PORT = 1212;

app.listen(PORT, () => {
    console.log(`Deploy in http://localhost:${PORT}`);
});
