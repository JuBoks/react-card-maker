import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleAuthProvider = new GoogleAuthProvider();
    this.githubAuthProvider = new GithubAuthProvider();
  }

  login(provider) {
    const authProvider = this.getProvider(provider);
    return signInWithPopup(this.auth, authProvider);
  }

  onAuthChanged(onUserChanged) {
    onAuthStateChanged(this.auth, (user) => {
      onUserChanged(user);
    })
  }

  getProvider(provider) {
    switch (provider) {
      case "Google":
        return this.googleAuthProvider;
      case "Github":
        return this.githubAuthProvider;
      default:
        throw new Error("Not Suportted Provider");
    }
  }

  getCredential(provider, result) {
    switch (provider) {
      case "Google":
        return GoogleAuthProvider.credentialFromResult(result);
      case "Github":
        return GithubAuthProvider.credentialFromResult(result);
      default:
        throw new Error("Not Suportted Provider");
    }
  }

  logout() {
    // console.log(this.auth);
    return signOut(getAuth());
  }
}

export default AuthService;