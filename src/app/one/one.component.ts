import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent{
  counter: number = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

}
