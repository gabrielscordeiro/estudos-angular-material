import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.scss']
})
export class ColdObservablesComponent implements OnInit {
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

    this.s1 = 'Waiting for interval...';

    this.subscription1 = myIntervalObservable.subscribe((_n) => {
      this.n1 = _n;
    }, (err) => {
      this.s1 = `Error: ${err}`;
    }, () => {
      this.s1 = 'Completed';
    });

    this.s2 = 'Waiting for interval...';

    setInterval(()=>{
        this.subscription2 = myIntervalObservable.subscribe((_n) => {
          this.n2 = _n;
        }, (err) => {
          this.s2 = `Error: ${err}`;
        }, () => {
          this.s2 = 'Completed';
        });
    },3000)


    setTimeout(() => {
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
    }, 11000)

  }

}
