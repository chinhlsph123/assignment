import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];
  page= 1;
  pageSize = 6;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  showDetail(product){
    this.selected = product;
  }
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
    // this.products = this.productService.getProducts();
  }
}