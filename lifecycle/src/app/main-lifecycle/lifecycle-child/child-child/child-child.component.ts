import { Component, OnInit, Input, OnChanges, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.scss']
})
export class ChildChildComponent implements OnInit, OnChanges,AfterContentInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log(`Child Child (ngOnInit) -  ${this.name}`);
  }

  ngOnChanges(){
    console.log(`Child Child (ngOnChanges) -  ${this.name}`);
  }

  ngAfterContentInit(){
    console.log(`Child Child (ngAfterContentInit) -  ${this.name}`);
  }

}
