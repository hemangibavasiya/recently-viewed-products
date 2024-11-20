import productDAO from '../dao/productDAO.js';

async function addProductDetails(product) {

  const productDetails = await productDAO.insertProduct(product);
  return productDetails;
}

export default { addProductDetails };