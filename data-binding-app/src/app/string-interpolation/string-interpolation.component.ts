import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {
  firstName = "John";
  
  person = {
    firstName: 'john',
    lastName: 'bro',
    age: 50,
    address: 'Estrada da Madeira, 1875, Bairro Barragem - Rio do Sul - SC'
  }

  constructor() { }

  ngOnInit() {
  }

}
