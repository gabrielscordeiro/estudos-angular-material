import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, Observer } from 'rxjs';

@Component({
  selector: 'app-hot-observables-intro',
  templateUrl: './hot-observables-intro.component.html',
  styleUrls: ['./hot-observables-intro.component.scss']
})
export class HotObservablesIntroComponent implements OnInit {

  @ViewChild('myButton', { static: true }) button: ElementRef;
  private n1: number = 0;
  private n2: number = 0;
  private s1: string = '';
  private s2: string = '';

  constructor() { }

  ngOnInit() {
    let myButtonClickObservable: Observable<any> = fromEvent(this.button.nativeElement, 'click');

    myButtonClickObservable.subscribe((event) => {
      console.log(`Button clicked 1`);
    });

    myButtonClickObservable.subscribe((event) => {
      console.log(`Button clicked 2`);
    });


    class Producer {
      private myListeners = [];
      private n = 0;
      protected id;

      addListener(listener) {
        this.myListeners.push(listener);
      }

      start() {
        this.id = setInterval(() => {
          this.n++;

          console.log(`From Producer: ${this.n}`)

          for (let listener of this.myListeners) {
            listener(this.n);
          }
        }, 1000);
      }

      stop() {
        clearInterval(this.id);
      }
    }

    let producer: Producer = new Producer();
    producer.start();

    setTimeout(() => {
      producer.addListener((n) => {
        console.log(`From listener 1 - ${n}`)
      });

      producer.addListener((n) => {
        console.log(`From listener 2 - ${n}`)
      });
    }, 4000)

    const myHotObservable = new Observable((observer: Observer<number>) => {
      producer.addListener((n) => {
        observer.next(n);
      });
    });

    myHotObservable.subscribe((n) => {
      console.log(`From subscribe 1 - ${n}`)
    });

    myHotObservable.subscribe((n) => {
      console.log(`From subscribe 1 - ${n}`)
    });
  }

}
