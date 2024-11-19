import { getRecentlyViewed } from '../dao/userDAO';
import { redisClient } from '../utils/redis';
import { MAX_RECENTLY_VIEWED } from '../constants/commonConstants';

export async function getRecentlyViewed(userId) {
  const cacheKey = `recentlyViewed:${userId}`;
  console.log('cacheKey', redisClient);
  const cachedData = await redisClient.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const recentlyViewed = await getRecentlyViewed(userId);
  redisClient.setex(cacheKey, 3600, JSON.stringify(recentlyViewed));

  return recentlyViewed;
}