import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://your-api-url/auth';

  constructor(private http : HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        // Assuming your backend returns a token upon successful login
        const token = response.token;
        localStorage.setItem('token', token);
      }),
      catchError((error) => {
        // Handle login errors here
        throw error;
      })
    );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password }).pipe(
      tap((response) => {
        // Handle successful registration here
      }),
      catchError((error) => {
        // Handle registration errors here
        throw error;
      })
    );
  }

  logout(): void {
    // Clear token from local storage or session storage
    localStorage.removeItem('token');
    // Redirect to login page or any other page after logout
    // Example: this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // Check if token exists in local storage or session storage
    return !!localStorage.getItem('token');
  }



  
}
