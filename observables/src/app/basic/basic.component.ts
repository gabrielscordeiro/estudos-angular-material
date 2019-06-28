import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  private subscription1: Subscription;
  private subscription2: Subscription;

  private n1: number = 0;
  private n2: number = 0;
  private s1: string = '';
  private s2: string = '';

  constructor() { }

  ngOnInit() {
    this.s1 = 'Initializing...';
    this.s2 = 'Initializing...';

    const myFirstObservable = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);

      observer.error('Ocorreu um erro');

      observer.complete();
    })

    myFirstObservable.subscribe((n: number) => {
      console.log(n);
    }, (err) => {
      console.error(err);
    }, () => {
      console.log('completed');
    });

    /*
    const timerCount = interval(500);

    timerCount.subscribe(
      (n) => console.log(n)
    );

    console.log('after interval')
    */

    const myIntervalObservable = new Observable((observer: Observer<any>) => {
      let i: number = 0;

      let id = setInterval(() => {
        i++;
        console.log(`From observable: ${i}`)

        if (i == 10) {
          observer.complete();
        } else if (i % 2 == 0) {
          observer.next(i);
        }
      }, 1000);

      return () => {
        clearInterval(id);
      }
    });

    this.subscription1 = myIntervalObservable.subscribe((_n) => {
      this.n1 = _n;
    }, (err) => {
      this.s1 = `Error: ${err}`;
    }, () => {
      this.s1 = 'Completed';
    });

    this.subscription2 = myIntervalObservable.subscribe((_n) => {
      this.n2 = _n;
    }, (err) => {
      this.s2 = `Error: ${err}`;
    }, () => {
      this.s2 = 'Completed';
    });

    setTimeout(() => {
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
    }, 11000)

  }

}
