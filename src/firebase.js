// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGJPPSyRHWkPOVhT7itK6CPK7JecK9M6M",
  authDomain: "business-card-maker-17c8a.firebaseapp.com",
  databaseURL: "https://business-card-maker-17c8a-default-rtdb.firebaseio.com",
  projectId: "business-card-maker-17c8a",
  storageBucket: "business-card-maker-17c8a.appspot.com",
  messagingSenderId: "131167968486",
  appId: "1:131167968486:web:819243fb3b02df4fd72f27",
  measurementId: "G-QCS5RGM40F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth();

// export const googleAuthProvider = new GoogleAuthProvider();
// export const githubAuthProvider = new GithubAuthProvider();
// export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);
// export const signInWithGithub = () => signInWithPopup(auth, githubAuthProvider);
// export const logOut = () => signOut(auth);
export default app;