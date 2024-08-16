import { Component, OnInit } from '@angular/core';
import { merge, interval,of,concat,take} from 'rxjs';
@Component({
  selector: 'app-concat-and-merge',
  templateUrl: './concat-and-merge.component.html',
  styleUrl: './concat-and-merge.component.css'
})
export class ConcatAndMergeComponent implements OnInit {
constructor(){}

ngOnInit(){}

// Below used Concat Operator

// ---start---
concatObservable(){
  const observable1 = interval(1000).pipe(take(3));
  const observable2 = interval(1000).pipe(take(4));
  const concatObservable = concat(observable1, observable2);
  concatObservable.subscribe((value: any) => {
    console.log('concat:', value);
  });
}

//  --end---

// Below used Merge Operator

//  ---start---
mergeObservables(){
const observable1 = interval(1000).pipe(take(3));
const observable2 = interval(1000).pipe(take(6));
const mergeObservable = merge(observable1, observable2);
mergeObservable.subscribe((value: any) => console.log('merge:', value));
}
//  ---end---
}
