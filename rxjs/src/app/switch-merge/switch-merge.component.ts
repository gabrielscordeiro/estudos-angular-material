import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';

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
    this.firstOption();
  }

  filterPeople(searchInput: string): Observable<Person[]>{
    if(searchInput.length ===0){
      return of([]);
    }else{
      return this.http.get<Person[]>(`${this.url}/${searchInput}`)//Passa pro get que quer que ele retorne um objeto/array de pessoas
    }
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
