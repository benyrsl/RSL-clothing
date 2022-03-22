import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChpGaFVOyxpeVvUS8ZTTwKt66nXfXVFYc",
  authDomain: "rsl-clothing-db.firebaseapp.com",
  projectId: "rsl-clothing-db",
  storageBucket: "rsl-clothing-db.appspot.com",
  messagingSenderId: "192329481740",
  appId: "1:192329481740:web:56169444671b401ce5f829",
  measurementId: "G-57L22PKBJN",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async function (
  userAuth,
  additionalData
) {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectioRef = firestore.collection("users");
  const snapShot = await userRef.get();

  // const collectionSnapshot = await collectioRef.get();

  // console.log({ collectionSnapshot });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName: "TEST",
        email: "TEST@TEST.COM",
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });
  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = function () {
  return auth.signInWithPopup(provider);
};

export default firebase;
