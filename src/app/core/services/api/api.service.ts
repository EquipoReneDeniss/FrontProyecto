import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  // URL
  private ApiUrl = 'https://api-km4l.onrender.com/xico';
  constructor(private http: HttpClient) {}

  // get example
  getUsers(): Observable<any> {
    return this.http.get(`${this.ApiUrl}/users`);
  }

  getComments(): Observable<any> {
    return this.http.get(`${this.ApiUrl}/comments`);
  }

  // post example
  createUSer(user: any): Observable<any> {
    return this.http.post(`${this.ApiUrl}/user/`, user);
  }

  // post example
  createComment(userId: number, categoryId: number, comment: any): Observable<any> {
    console.log(`Registrando comentario del usuario con id: ${userId} en la categoria: ${categoryId} con contenido: ${comment}`);
    console.warn(comment);
    
    return this.http.post(`${this.ApiUrl}/comment/?userID=${userId}&categoryID=${categoryId}`, comment);
  }

  // auth
  authUser(credentials: any): Observable<any> {
    return this.http.post(`${this.ApiUrl}/user/auth/`, credentials);
  }
}
