import { Component , OnInit } from '@angular/core';
import { ApiServiceService } from './Services/api-service.service';
import {FormGroup , FormControl} from '@angular/forms'
import { Observable } from '@firebase/util';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Learning-Api';
  constructor(private service : ApiServiceService , private http: HttpClient){}

  data:any[]=[];
  ngOnInit() {
    this.service.getData().subscribe(
      (response: any[]) => {
        this.data = response;
        console.log(response);
      },
      (error: number) => {
        console.error('Error fetching data:', error);
      }
    );
  }


/* Creating form to put data on server */
randomForm = new FormGroup({
email:new FormControl('',[]),
password:new FormControl('',[])
})

postBtn(user:any) {
  debugger
  this.service.postData(user).subscribe(
    (response: any) => {
      console.log('User submitted successfully:',response);
      // console.log(response);
    },
    (error: number) => {
      console.error('Error submitting user:', error);
      
    }
  );
}
getFromFirebase(){
  this.http.get('https://api-integration-cf163-default-rtdb.firebaseio.com.json/').subscribe((res:any)=>{
    console.log(res);
    this.data = res;
  });
}
}


