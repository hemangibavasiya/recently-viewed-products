import redis from "redis";

let redisConnectionObject;
async function redisConnect() {
    const client = redis.createClient({ port: process.env.REDIS_PORT });
    redisConnectionObject = client;

    client.on('error', (err) => console.error('Redis Client Error:', err));

    try {
        await client.connect();
        console.log(`Redis Client Connected on PORT : ${process.env.REDDIS_PORT}`);
        return client;
    } catch (error) {
        console.error('Error connecting to Redis:', error);
        throw error;
    }
}

export default { redisConnectionObject, redisConnect }