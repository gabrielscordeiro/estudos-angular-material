import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {
  myFontSize: string = "10px";
  myColor: string = "green";
  
  constructor() { }

  ngOnInit() {
  }

}
