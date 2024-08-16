import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs'
import { filter, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

constructor(private http : HttpClient){}  


// Making service for GET data from Json Api
// Also used tap operator in this example
// ---start---
getDataFromJson(): Observable<any>{
  const url = 'http://localhost:3000/users';
  return this.http.get(url).pipe(tap(value => console.log(`Processing : ${JSON.stringify(value)}`)));
}
// ---End---

// Now for Filterd Data

//  ---start---
filterData(): Observable<any>{
  debugger
  const url = 'http://localhost:3000/users';
  return this.http.get(url).pipe(filter( (result:any) => result.id % 2==0));
}
//  ---end---
}



