import productService from '../services/productService.js';

export async function addProduct(req, res) {
  try {
    const productDetails = req.body;
    const recentlyViewed = await productService.addProductDetails(productDetails);
    return res.status(200).json(recentlyViewed);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}