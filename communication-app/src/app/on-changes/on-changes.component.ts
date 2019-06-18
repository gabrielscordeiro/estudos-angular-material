import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss']
})
export class OnChangesComponent implements OnInit {
  private name: string;
  private newName: string;

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.newName = this.name;
  }

}
