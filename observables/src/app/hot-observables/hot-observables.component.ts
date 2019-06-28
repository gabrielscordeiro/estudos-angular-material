import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.scss']
})
export class HotObservablesComponent implements OnInit {
  protected n: number = 0;
  private n1: number = 0;
  private n2: number = 0;
  private s1: string = '';
  private s2: string = '';

  private myObservable: Observable<number>;


  constructor() { }

  ngOnInit() {
    this.myObservable = new Observable((observer: Observer<number>) => {
      let i: number = 0;

      setInterval(() => {
        i++;
        if (i == 100) {
          observer.complete();
        } else {
          observer.next(i);
        }
      }, 1000)
    })
  }

  usingSubjects() {

  }

}
