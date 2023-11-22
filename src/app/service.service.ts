import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class ApiService {
constructor(private http: HttpClient ) { }
rootURL = 'http://localhost:3080/api';


 getUsers(): Observable<any> {
    return this.http.get(this.rootURL + '/users')
 }

 addUser(user: any): Observable<any> {
return this.http.post(this.rootURL + '/user', {user});}
}