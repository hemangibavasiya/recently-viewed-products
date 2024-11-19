import userDAO from '../dao/userDAO.js';
import redisClient from '../utils/redis';
// import { MAX_RECENTLY_VIEWED } from '../constants/commonConstants';

async function getRecentlyViewed(userId) {
  const cacheKey = `recentlyViewed:${userId}`;
  const cachedData = await redisClient.redisConnectionObject.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const recentlyViewed = await userDAO.getRecentlyViewedData(userId);
  redisClient.redisConnectionObject.set(cacheKey, JSON.stringify(recentlyViewed), 3600);

  return recentlyViewed;
}

export { getRecentlyViewed };