import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA4Km6jN0P4uj2aN3RpzLZj18bxowHg1Sc",
  authDomain: "armany-clothing-db.firebaseapp.com",
  projectId: "armany-clothing-db",
  storageBucket: "armany-clothing-db.appspot.com",
  messagingSenderId: "906856975957",
  appId: "1:906856975957:web:c8220c7f60b0ad66c20edc",
  measurementId: "G-4Q5N0VKLCG",
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
