import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit {
  @Input() private name: string;
  @Input() private age: number;
  @Input() private food: string;
  constructor() { }

  ngOnInit() {
  }

}
