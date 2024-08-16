import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrl: './form-event.component.css'
})
export class FormEventComponent implements OnInit,AfterViewInit {
constructor(){}
@ViewChild('addBtn') addBtn!:ElementRef;
ngOnInit(){}
ngAfterViewInit(){
debugger
let count=0;
fromEvent(this.addBtn.nativeElement,'click').subscribe((res:any)=>{
console.log('Video ' + count++);
})
}

}
