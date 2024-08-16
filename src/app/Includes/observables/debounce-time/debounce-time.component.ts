import { Component } from '@angular/core';
import {fromEvent,debounceTime} from 'rxjs'
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.css'
})
export class DebounceTimeComponent {
  debouncedValue: string = '';

  onInputChange(value: string) {
    fromEvent(document, 'keyup')
      .pipe(
        debounceTime(500)
      )
      .subscribe(() => {
        this.debouncedValue = value;
      });
  }
}
