const express = require('express');
const admin = require('firebase-admin');
const redis = require('redis');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.yaml');
const routes = require('./routes/index.js');
const { PORT } = require('./constants/commonConstants.js');

admin.initializeApp({
  credential: admin.credential.cert(require('./serviceAccountKey.json')),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});

const app = express();

const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, redisClient };
