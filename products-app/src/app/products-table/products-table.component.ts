import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) datatable: MatTable<any>;

  private products: Product[];
  private prodColumns: string[] = ['id', 'name', 'price', 'description', 'department']

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();

    this.productService.onNewProduct.subscribe((p) => {
      this.datatable.renderRows();
    });
  }

}
