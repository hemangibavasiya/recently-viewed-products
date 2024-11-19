import userDAO from '../dao/userDAO.js';
import { redisConnectionObject } from '../utils/redis.js';

async function getRecentlyViewed(userId) {
  const cacheKey = `recentlyViewed:${userId}`;
  const cachedData = await redisConnectionObject.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const recentlyViewed = await userDAO.getRecentlyViewedData(userId);
  await redisConnectionObject.set(cacheKey, JSON.stringify(recentlyViewed), 'EX', 3600);

  return recentlyViewed;
}

export default { getRecentlyViewed };