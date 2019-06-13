import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client/client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string;
  @Input('othername') lastName: string;
  @Input() age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      {
        id: 1, name: 'Gabriel', age: 21
      },
      {
        id: 1, name: 'Bob', age: 20
      },
      {
        id: 1, name: 'Ana', age: 40
      },
      {
        id: 1, name: 'Maria', age: 30
      }
    ]
  }

  ngOnInit() {
  }

}
