import { firestore } from 'firebase-admin';

async function getRecentlyViewedData(userId) {
  const db = firestore();
  const snapshot = await db.collection('users').doc(userId).collection('recentlyViewed').orderBy('timestamp', 'desc').limit(10).get();

  return snapshot.docs.map(doc => doc.data());
}

export { getRecentlyViewedData };