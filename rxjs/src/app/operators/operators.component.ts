import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { map, delay, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mapClick() {
    from([1, 2, 3, 4, 5, 6, 7])
      .pipe(
        //map(i => `Number: ${i}`)
        map(i => i * 2),
        map(i => i * 10),
        delay(1000)
      )//a ideia do pipe é encadear o tanto que operadores que quiser o resultado de um vai sendo passado para o outro
      .subscribe((i) => console.log(i));

    fromEvent(document, 'click')
      .pipe(
        map((e: MouseEvent) => ({
          x: e.screenX,
          y: e.screenY
        }))
      ).subscribe((pos) => console.log(pos));
  }

  filterClick() {
    from([1, 2, 3, 4, 5, 6, 7])
      .pipe(
        filter(i => i % 2 == 1)
      )
      .subscribe((i) => console.log(i));

    interval(1000)
      .pipe(
        filter(i => i % 2 == 0),
        map(i => `Value: ${i}`),
        delay(1000)
      ).subscribe((i) => console.log(i));
  }

  tapClick() {
    interval(1000)
      .pipe(
        tap(i=>console.log('')),
        tap(i=>console.warn(`Before filtering: ${i}`)),
        filter(i => i % 2 == 0),
        tap(i=>console.warn(`After filtering: ${i}`)),
        map(i => `Value: ${i}`),
        tap(i=>console.warn(`After map: ${i}`)),
        delay(1000)
      ).subscribe((i) => console.log(i));
  }

}
