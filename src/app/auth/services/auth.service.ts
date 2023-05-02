import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Usuario } from '../../core/models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface LoginFormValue {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser$ = new BehaviorSubject<Usuario | null>(null);

  constructor(
    private router: Router,
  ) { }

  obtenerUsuarioAutenticado(): Observable<Usuario | null> {
    return this.authUser$.asObservable();
  }

  login(formValue: LoginFormValue): void {
    const usuario = {
      id: 1,
      nombre: 'Mariano',
      apellido: 'Gruppo',
      role: 'usr',
      email: formValue.email,
    }
    this.authUser$.next(usuario);
    this.router.navigate(['dashboard']);
  }

  logout(): void {
    localStorage.removeItem('usr');
    this.authUser$.next(null);
    this.router.navigate(['auth']);
  }

}