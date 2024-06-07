import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:4000/signup', data);
  }

  signin(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:4000/signin', data);
  }
}
