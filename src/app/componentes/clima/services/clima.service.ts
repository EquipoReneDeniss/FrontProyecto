import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url='https://api.openweathermap.org/data/2.5/weather?&appid=';
  key='83584e0040ff305409badab7f0340c30';

  
  constructor(private http: HttpClient) { }

  getClima(ciudad:string): Observable<any>{
    const URL = this.url +this.key + '&q='+ ciudad;
    return this.http.get(URL)
  }
}
