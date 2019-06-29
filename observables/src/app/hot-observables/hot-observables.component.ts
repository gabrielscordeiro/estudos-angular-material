import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, ConnectableObservable } from 'rxjs';

import { publish, refCount } from 'rxjs/operators';

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

      console.log('%c Observable Created', 'background:#ccc;color:#ff0000')

      setInterval(() => {
        i++;
        console.log(`%c i = ${i} Observable Created`, 'background:#ccc;color:#0000ff');
        (i == 100) ? observer.complete() : observer.next(i)
      }, 1000);
    });

    //this.usingSubjects();
    this.usingPublish();
  }

  usingPublish() {
    //const multicasted = this.myObservable.pipe(publish(), refCount());
    const multicasted: ConnectableObservable<number> = this.myObservable.pipe(publish()) as ConnectableObservable<number>;


    multicasted.connect();

    setTimeout(() => {
      multicasted.subscribe((_n) => {
        this.n1 = _n;
        this.s1 = 'OK';
      })
    }, 2000);


    this.s2 = 'Waiting for interval...';
    //Subscriber 2
    setTimeout(() => {
      multicasted.subscribe((_n) => {
        this.n2 = _n;
        this.s2 = 'OK';
      })
    }, 4000);
  }

  usingSubjects() {
    const subject = new Subject<number>();
    this.myObservable.subscribe(subject);

    this.s1 = 'Waiting for interval...';

    //Subscriber 1
    setTimeout(() => {
      subject.subscribe((_n) => {
        this.n1 = _n;
        this.s1 = 'OK';
      })
    }, 2000);


    this.s2 = 'Waiting for interval...';
    //Subscriber 2
    setTimeout(() => {
      subject.subscribe((_n) => {
        this.n2 = _n;
        this.s2 = 'OK';
      })
    }, 4000);


  }

}
