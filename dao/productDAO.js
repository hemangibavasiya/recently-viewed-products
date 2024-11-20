import { productRepository } from '../models/product.js';

async function insertProduct(product) {
    const response = await productRepository.create(product);
    return response;
}

export default { insertProduct };