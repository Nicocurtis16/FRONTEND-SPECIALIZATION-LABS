import { Injectable } from '@angular/core';
// import {apiUrl} from "./data.service";
import {BehaviorSubject, finalize, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private readonly authUrl = apiUrl + 'login';
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  // constructor( private http: HttpClient ) { }
  // login(username: string, password: string): Observable<any> {
  //   this.loadingSubject.next(true);
  //   return this.http.post<any>(this.authUrl, { username, password }).pipe(
  //     tap((response) => {
  //       if (response?.token) {
  //         localStorage.setItem('authToken', response.token);
  //       }
  //     }),
  //     finalize(() => this.loadingSubject.next(false))
  //   );
  // }
}
