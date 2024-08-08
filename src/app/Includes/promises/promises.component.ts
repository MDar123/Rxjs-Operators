import { Component, OnInit } from '@angular/core';
import { random } from 'node-forge';
@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent implements OnInit {
constructor(){}

dellAvailable(){return true}
hpAvailable(){return false}
// We can also pass objects like :
dell = {
  brand:"dell",
  hardDisk:"2 Tb",
  color:"black"
  };
  hp = {
    brand:"hp",
    hardDisk:"1 Tb",
    color:"blue"
    };
    notAvailable = {
      brand:"Not available",
      status:"failed"
      };
ngOnInit():void {
// ---Start--of--ngOnint---

  //for conditions in both values are not correct then used below logic 

// Use of Promises that returns a single value
let buyLaptop = new Promise((resolve: any,reject: any)=>{
  // resolve('Promise is resolved');
  // reject('Promise is Rejected');

if(this.dellAvailable()){
  return setTimeout(()=>{
    //resolve('Dell is Available')
    resolve(this.dell)
  },3000);
}else if(this.hpAvailable()){
  return setTimeout(()=>{
    //resolve('Hp is Available')
    resolve(this.hp)
  },3000);
}else{
  return setTimeout(()=>{
    // reject('Both laptops are not available')
    reject(this.notAvailable)
  },3000);
}
});

// Applying return values of promises ('then' for resolve , 'catch' for reject)

// buyLaptop.then(res=>{console.log(res)}).catch(res=>{console.log('reject code = > ',res)});
// setTimeout(()=>{console.log(this.check().then(data => console.log('Data is checking')));
// },4000)

this.getData();

// ----end--of--ngOnint--
}


async check(){
  return 'Data is Checking'
}
// Use of async and await with promise 
promise = new Promise((resolve,reject)=>{
  setTimeout( ()=>{
    resolve('data is received');
  } ,5000)
});
async getData(){
  let response = await this.promise;
  console.log(response);
}

// Practicing Promises only below

// ---start---
dellLaptop = new Promise((resolve,reject)=>{
  resolve(this.dell);
});


fetch1(){
document.getElementById('resultid1')!.innerText = 'Fetching Data...'

this.dellLaptop.then(res=>{
  console.log(res);
document.getElementById('resultid1')!.innerText = JSON.stringify(res);

});

}
// ---end---

// Practicing using async and await

// ---start---
async fetch2(){
  debugger
  document.getElementById('resultid2')!.innerText = 'Fetching Data...'
  let data = await this.dellLaptop;
  console.log(data);
  document.getElementById('resultid2')!.innerText = JSON.stringify(data);
}
//  ---end---

//Practicing using fetch data from API

// ---start---
random =  fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json());

fetch3(){
  document.getElementById('resultid3')!.innerText = 'Fetching Data...'
  this.random.then((res: any)=>{
    console.log(res)
  document.getElementById('resultid3')!.innerText = JSON.stringify(res);

  });
}
//  ---End---
}
