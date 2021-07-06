import { Injectable, NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userLogo = new Subject<string>();
  constructor(
    public auth: AngularFireAuth,
    public router: Router,
  ) { }
  signUp(form) {
    return this.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
      .then(res => {
        const displayName = form.value.firstName[0].toUpperCase() + form.value.firstName.slice(1).toLowerCase() + ' ' + form.value.lastName[0].toUpperCase() + form.value.lastName.slice(1).toLowerCase();
        res.user.updateProfile({
          displayName: displayName
        });
        this.router.navigateByUrl('/sign-in');
      })
      .catch(error => window.alert(error.message));
  }

  signIn(form) {
    return this.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
      .then(() => {
        this.getUser();
        this.router.navigateByUrl('/');
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  getUser() {
    this.auth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user.displayName));
        const userr = localStorage.getItem('user');
        const userLogo = (userr.split(' ')[0][1] + userr.split(' ')[1][0]).toUpperCase();
        this.userLogo.next(userLogo);
      } else {
        localStorage.setItem('user', '');
      }
    });

  }

  signOut(){
    return this.auth.signOut().then(() => {
      localStorage.setItem('user','');
      this.userLogo.next('');
      this.router.navigate(['sign-in']);
    })
  }
}
