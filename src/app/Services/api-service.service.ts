import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


constructor(private http: HttpClient) {}

/* Below Used Get Method using Json placeHolder */

  getData(): Observable<any> {
    debugger
    const url = 'https://jsonplaceholder.typicode.com/posts';   
    return this.http.get(url);
  }

/* Below Used Post Method using Json placeHolder */

private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  postData(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.apiUrl, user, httpOptions);   
  }


/* Below used post method using Swagger Api's */


// private apiUrl = 'https://freeapi.miniprojectideas.com/api/User/Login';
//   postData(user: any): Observable<any> {
//     debugger
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };
//     return this.http.post<any>(this.apiUrl, user, httpOptions);   
//   }

}
