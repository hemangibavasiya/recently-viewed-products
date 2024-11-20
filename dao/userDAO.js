import admin from 'firebase-admin';

async function getRecentlyViewedData(userId) {
  const db = admin.firestore();
  const snapShot = await db.collection('recentlyViewed').where('userId', '==', userId).orderBy('timestamp', 'desc').limit(10).get();
  return snapShot
}

export default { getRecentlyViewedData };