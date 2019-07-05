import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';
import { map, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-switch-merge',
  templateUrl: './switch-merge.component.html',
  styleUrls: ['./switch-merge.component.css']
})
export class SwitchMergeComponent implements OnInit {
  private searchInput: string = '';
  private people$: Observable<Person[]>;

  private readonly url: string = 'http://localhost:9000';

  @ViewChild('searchBy', { static: true }) el: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.firstOption();
    this.secondOption();
  }

  filterPeople(searchInput: string): Observable<Person[]> {
    if (searchInput.length === 0) {
      return of([]);
    } else {
      return this.http.get<Person[]>(`${this.url}/${searchInput}`)//Passa pro get que quer que ele retorne um objeto/array de pessoas
    }
  }

  secondOption() {
    let keyup$ = fromEvent(this.el.nativeElement, 'keyup');
    let fetch$ = keyup$.pipe(
      map((e) => this.filterPeople(this.searchInput)));

    this.people$ = fetch$.pipe(mergeAll())//Automaticamente chama o subscribe interno do filterPeople e retorna o dado do resultado do subscribe interno
  }

  firstOption() {
    fromEvent(this.el.nativeElement, 'keyup')
      .subscribe((e) => {
        this.filterPeople(this.searchInput)
          .subscribe((res) => {
            console.log(res);
          });
      });
  }

}
