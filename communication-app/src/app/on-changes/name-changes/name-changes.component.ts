import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.scss']
})
export class NameChangesComponent implements OnInit, OnChanges {

  @Input() private name: string;
  private nameBefore: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if(changes.hasOwnProperty('name')){
      this.nameBefore = changes['name'].previousValue;
    }
  }
}
