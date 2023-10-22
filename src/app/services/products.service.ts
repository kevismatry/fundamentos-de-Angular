import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product, Products } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   private apiUrl = 'https://api.escuelajs.co/api/v1/products';


  constructor(
    private http: HttpClient
  ) { }

  getAllproducts() {
    return this.http.get<Products>(this.apiUrl);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
}