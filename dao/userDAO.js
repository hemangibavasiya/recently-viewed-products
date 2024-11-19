import admin from 'firebase-admin';

async function getRecentlyViewedData(userId) {
  const db = admin.firestore();
  // const snapshot = await db.collection('users').doc(userId).collection('recentlyViewed').orderBy('timestamp', 'desc').limit(10).get();
  const snapShot = await db.collection('recentlyViewed').where('userId', '==', userId).orderBy('timestamp', 'desc').limit(10).get();

  // return snapshot.docs.map(doc => doc.data());
  return snapShot
}

export default { getRecentlyViewedData };