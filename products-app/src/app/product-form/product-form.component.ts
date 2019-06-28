import { Component, OnInit } from '@angular/core';
import { Department } from '../models/Department.model';
import { ProductService } from '../product.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})

export class ProductFormComponent implements OnInit {
  private id: number;
  private name: string;
  private department: Department;
  private price: number;
  private description: string;
  private departments: Department[];

  constructor(private productService: ProductService, private departmentService: DepartmentService) {

  }

  ngOnInit() {
    this.departments = this.departmentService.getDepartments();
  }

  save() {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    });
    
    this.clear();
  }

  clear() {
    this.name = '';
    this.price = 0;
    this.description = '';
    this.department = null;
  }

}
