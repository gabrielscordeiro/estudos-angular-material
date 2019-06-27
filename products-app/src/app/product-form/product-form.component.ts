import { Component, OnInit } from '@angular/core';
import { Department } from '../models/Department.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})

export class ProductFormComponent implements OnInit {

  private name:string;
  private department: Department;
  private price:number;
  private description:string;

  constructor() { }

  ngOnInit() {
  }

  save(){

  }
  
  clear(){

  }

}
