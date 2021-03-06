import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:3000/api";

  constructor(private http: HttpClient) {

   }

   register(user){
     return this.http.post<any>(this.URL + '/register', user);
   }

   login(user){
    return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn() : Boolean{
    return !!(localStorage.getItem('token'));
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    
  }
}

