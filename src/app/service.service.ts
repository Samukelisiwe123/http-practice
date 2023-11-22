import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class ApiService {
constructor(private http: HttpClient ) { }
rootURL = 'http://localhost:3080/api';
url='http://localhost:3080/api/users';
getUsers() {
return this.http.get(this.url,{headers:{Accept: 'application/json'}});
}
addUser(user: any) {
return this.http.post(this.rootURL + '/user', {user});}
}