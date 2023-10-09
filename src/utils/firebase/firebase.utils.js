import { initializeApp } from 'firebase/app';
import {
    getAuth,

    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail

} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, addDoc, collection }
    from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAr_JkU3N21IY4nvoL0k1sfOO8AzEF6LBE",
    authDomain: "pet-city-eb6d8.firebaseapp.com",
    projectId: "pet-city-eb6d8",
    storageBucket: "pet-city-eb6d8.appspot.com",
    messagingSenderId: "53060420486",
    appId: "1:53060420486:web:76994e0e0e64991c536207",
    measurementId: "G-GGVTHRR61R"
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export { firebaseApp, storage };

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const userDoc = await createUserDocumentFromAuth(user);
        return {
            userCred: user,
            userDoc: userDoc,
        }
    } catch (error) {
        console.error("Error during Google Sign-In:", error);
        throw error; // Re-throw the error so that it can be caught and handled by the caller
    }
}


export const db = getFirestore(firebaseApp);


export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password);

    // return await createUserWithEmailAndPassword(auth, email, password);

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log("Auth Response:", res);
    if (!user) throw new Error("Failed to create user.");
    const docRef = await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: email,

    });
    return {
        userCred: user,
        newDocId: docRef.id
    };

};



export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return {
        userCred: user,
    }

};

export const signOutUser = async () => {
    console.log(auth)
    return await signOut(auth);


}

export const changePassowrd = async (email) => {

    return await sendPasswordResetEmail(auth, email);


}

