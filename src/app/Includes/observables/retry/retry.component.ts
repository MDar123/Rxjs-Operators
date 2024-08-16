import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {retry,throwError,catchError} from 'rxjs'
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.css'
})
export class RetryComponent implements OnInit {
ngOnInit(){}
constructor(private http : HttpClient){}
person: any;
fetching:boolean = false;
status='No Data'
// Making FetchDetails function to get data from Api

fetchDetails(){
  // this.fetching = true;
  // this.http.get('http://localhost:3000/users/1').subscribe((res:any)=>{
  //   console.log(res);
  //   this.person = res;
  //   this.status = 'Data Fetched'
  //   this.fetching = false;
  // }),
  // (err: any)=>{
  //   console.log(err);
  //   this.status = 'Error Data Fetching'
  //   this.fetching = false;
  // }
  this.http.get('http://localhost:3000/users')
  .pipe(
    retry(3), // Retry up to 3 times
    catchError((error: any) => {
      console.error('Error:', error);
      this.status = 'Error Data Fetching'
      return throwError(() => error); // Rethrow to terminate the sequence
    })
  )
  .subscribe(
    (data: any) => {
      this.person = data;
    },
    (error: any) => {
      console.error('Error:', error);
    }
  );
}
}
