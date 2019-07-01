import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { map, delay } from 'rxjs/operators';

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

}
