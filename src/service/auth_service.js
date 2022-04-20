import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut
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

  getProvider(provider) {
    switch (provider) {
      case "google":
        return this.googleAuthProvider;
      case "github":
        return this.githubAuthProvider;
      default:
        throw new Error("Not Suportted Provider");
    }
  }

  logout() {
    return signOut(this.auth);
  }
}

export default AuthService;