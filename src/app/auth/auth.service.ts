import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated: boolean = false;
  isLoading: boolean = false;


  login(form: LoginForm) {
    if(this.isLoading) { return;}
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        this.isAuthenticated = true;
        this.router.navigate(['']);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert("Credentials do not match our records.\n\nERROR MESSAGE: " + errorMessage);
      })
      .finally(() => (this.isLoading = false));
  }


  register(form: RegisterForm) {
    if(this.isLoading) { return;}
    this.isLoading = true;
    
    if(form.password != form.confirm_password){
      alert("Passwords do not match.");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        //const user = userCredential.user;
        this.isAuthenticated = true;
        alert("Account has been created successfully");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert("Account cannot be created.\n\nERROR MESSAGE: " + errorMessage);
      })
      .finally(() => (this.isLoading = false));
  }


  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      this.isAuthenticated = false;
    }).catch((error) => {
      alert("There was an error trying to sign out.");
    });
  }
}
