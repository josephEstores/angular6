import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /** HttpClient is for services
   *  HttpClientModule is for the root para magamit si HttpClient
   * Matatagpuan si HttpClientModule sa app.module.ts
   * 
   */
  constructor(private http: HttpClient) { }

  
  get(val) {
    return this.http.get(`https://jsonplaceholder.typicode.com/${val}`);
  }
}
