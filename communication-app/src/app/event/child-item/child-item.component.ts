import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss']
})
export class ChildItemComponent implements OnInit {
  @Input() title: string;
  @Output() plusOne = new EventEmitter<any>(); 
  @Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
