import { getRecentlyViewed } from '../services/userService';

export async function getRecentlyViewedProduct(req, res) {
  try {
    const { userId } = req.params;
    const recentlyViewed = await getRecentlyViewed(userId);
    return res.status(200).json(recentlyViewed);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}