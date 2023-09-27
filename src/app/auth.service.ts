import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://159.65.96.86:8080/services/auth/signin';
  loggedIn = false;

  constructor(private http: HttpClient) { }
    login(username:String, password:String): Observable<any>{
      const body = {username, password};
      this.loggedIn = true;
      return this.http.post(this.apiUrl,body);
    }
    logout(): void {
      localStorage.removeItem('accessToken');
      this.loggedIn = false;
    }
}
