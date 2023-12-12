import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class APIService {
  // URL
  private apiURL = "";

  constructor(
    private httpClient: HttpClient
  ) { }

  // GET
  getData(): Observable<any> {
    return this.httpClient.get(``);
  }
  // POST
  createUser(user: any): Observable<any> {
    return this.httpClient.post(``, user);
  }

}
