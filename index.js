import express, { json } from 'express';
import { serve, setup } from 'swagger-ui-express';
import { config } from 'dotenv';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger.yaml');
import logger from './utils/logger.js';
import customResponseHandler from './utils/response.js';
import errorHandler from './utils/error.js';
import allRoutes from './routes/index.js';
import { redisConnect } from './utils/redis.js';
import initializeFirestore from './models/connection.js'

initializeFirestore()
const corsOptions = {
  allowedHeaders: ['authorization', 'Authorization', 'Origin', 'Content-Type', 'Accept'],
  allowedOrigins: ['http://localhost:3000', 'https://example.com']
};

config();

(async () => {
  await redisConnect()
})();



const app = express();
app.use(logger.httpRequestLogger);
app.use(customResponseHandler);
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PATCH, PUT, POST, GET, DELETE, OPTIONS, HEAD');
  next();
});

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 500,
  message: 'Too many requests, please try again later.',
});

app.use(limiter);

app.use(json());

app.use('/api-docs', serve, setup(swaggerDocument));

app.use('/api', allRoutes);

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port ${process.env.PORT }`);
});

app.use(logger.httRequestErrorLogger);

app.use(errorHandler);

export default { app };