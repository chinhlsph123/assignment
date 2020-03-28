import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  selected: Product;
  products: Product[];
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