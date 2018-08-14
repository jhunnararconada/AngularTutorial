import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = `http://localhost:8008`;
  
  getUsers(){
    return this.http.get(`${this.url}/results`);
  }
}
