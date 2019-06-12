import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {
  users = [{
    login: 'Bob',
    role: 'admin',
    lastLogin: new Date('2/12/2018')
  },{
    login: 'Lia',
    role: 'user',
    lastLogin: new Date('2/30/2018')
  },{
    login: 'John',
    role: 'admin',
    lastLogin: new Date('2/10/2018')
  },{
    login: 'Robin',
    role: 'admin',
    lastLogin: new Date('2/12/2018')
  }];
  constructor() { }

  ngOnInit() {
  }

}
