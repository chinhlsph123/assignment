import { Injectable } from '@angular/core';
// import { data } from './MockData';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  api = 'https://5e7dc96bfa19eb0016519ff1.mockapi.io//product';
  // products = data;
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
    // return this.products;
  }
  getProduct(id): Observable<Product>{
    console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
    removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, product);
    // let newObj = { id: 6, ...product };
    // this.products.push(newObj);
  }
  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }

}