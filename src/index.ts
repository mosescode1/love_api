import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import rateLimit     from "express-rate-limit";
import dotenv from 'dotenv';
import messageRouter from "./routes/message"
// loads configuration from .env
dotenv.config();

const port = 3000;
const app = express();

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 100; // Maximum requests per window

const rateLimitConfig = {
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: RATE_LIMIT_MAX_REQUESTS
};

const limiter = rateLimit(rateLimitConfig);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"))
app.use(cors());
app.use(limiter);


app.get('/', (_, res) => {
    res.send('Hello World!');
})

app.use(messageRouter)



console.error(app.listen(port, () => console.log(`Example app listening on port ${port}!`)));