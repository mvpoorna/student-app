import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userState: any;

  constructor(
    private socialAuthService: SocialAuthService
  ) {    
    this.socialAuthService.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  } 

  // Login with Google
  GoogleAuth() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }  

  // Sign out 
  SignOut() {
    this.socialAuthService.signOut();
    localStorage.removeItem('user');
  }

}