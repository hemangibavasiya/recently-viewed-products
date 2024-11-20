import userService from '../services/userService.js';

export async function getRecentlyViewedProduct(req, res) {
  try {
    const { userId } = req.params;
    const recentlyViewed = await userService.getRecentlyViewed(userId);
    return res.status(200).json(recentlyViewed);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}