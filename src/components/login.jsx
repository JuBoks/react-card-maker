import React from 'react';
import { app } from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import  { useNavigate } from 'react-router-dom'

const auth = getAuth();
const githubAuthProvider = new GithubAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();
githubAuthProvider.setCustomParameters({
  'allow_signup': 'false'
});
const Login = (props) => {
  const navigate = useNavigate();

  const logInWithGithub = () => {
    signInWithPopup(auth, githubAuthProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // ...
        console.log('IN', user, credential)
      }).catch((error) => {
        // Handle Errors here .
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential)
      });
  }

  const logInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // ...
        console.log('IN', user, credential)
        navigate("/home");
      }).catch((error) => {
        // Handle Errors here .
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential)
      });
  }

  const logout = () => {
    console.log('logout')
  }

  return (
  <>
    <button onClick={logInWithGoogle}>구글로 로그인</button>
    <button onClick={logInWithGithub}>깃헙으로 로그인</button>
  </>
)};

export default Login;