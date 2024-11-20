import { getRepository, Collection } from 'fireorm';
import initializeFirestore from './connection.js';

initializeFirestore();

@Collection('activityProduct')
class ActivityProduct {
    id;
    userId;
    productId;
    viewedCount;
    viewedAt;

    constructor(userId, productId) {
        this.userId = userId;
        this.productId = productId;
        this.viewedAt = new Date();
    }
}

const activityProductRepository = getRepository(ActivityProduct);

export { ActivityProduct, activityProductRepository };