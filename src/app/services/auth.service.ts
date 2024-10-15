import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  async login(email: string, password: string) {
    try {
      const resultado = await this.afAuth.signInWithEmailAndPassword(email, password);
      return resultado.user;
    } catch (error) {
      console.error("Error de inicio de sesión: ", error);
      return null;
    }
  }

  async register(email: string, password: string, username: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.firestore.collection('users').doc(userCredential.user?.uid).set({
        email: email,
        username: username
      });
      return userCredential.user;
    } catch (error) {
      console.error("Error al registrar el usuario: ", error);
      throw error;
    }
  }

  getUserData(): Observable<any> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.collection('users').doc(user.uid).valueChanges();
        } else {
          return [];
        }
      })
    );
  }

  async sendPasswordResetEmail(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      return true;
    } catch (error) {
      console.error("Error al enviar el correo de restablecimiento: ", error);
      throw error;
    }
  }

  async logout() {
    return this.afAuth.signOut();
  }

  getUser() {
    return this.afAuth.user;
  }
}