import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit {
  name1: string = "Gabriel";
  name2: string = "Irineu";

  client = {
    firstName: 'Gabriel',
    lastName: 'Schmidt Cordeiro',
    address: 'Rua Humberto Sandri, 127, Bairro Fruteira, Laurentino - SC, CEP: 89170-000',
    age: 21
  }

  constructor() { }

  ngOnInit() {
  }

}
