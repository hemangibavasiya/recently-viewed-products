import { getRepository, Collection } from 'fireorm';
import initializeFirestore from './connection.js';

initializeFirestore();

@Collection('products')
class Product {
    id;
    name;
    description;
    price;
    createdAt;
    updatedAt;

    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

const productRepository = getRepository(Product);
export { Product, productRepository };