import { Component, OnInit } from '@angular/core';

import { Product, CreateProductDTO } from '../../models/product.model';


import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: 0,
    price: 0,
    images: [],
    title: '',
    category: {
      id: 0,
      name: '',
      image: '',
      creationAt: '',
      updatedAt: ''
    },
    description: '',
    creationAt: '',
    updatedAt: ''
  };


  //today = new Date();
  //date = new Date(2021, 1, 21)


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){
     this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllproducts()
    .subscribe( (data)  => {
      this.products = data;
      console.log('allproducts:', data);
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
   this.productsService.getProduct(id)
   .subscribe(data => {
    this.toggleProductDetail();
    this.productChosen = data;
   })
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      description: 'la compu nueva es la mejor aguante noblex',
      images: [''],
      price: 1000,
      categoryId: 2,
      creationAt: '',
      updatedAt: ''
    }
    this.productsService.create(product)
    .subscribe(data => {
      this.products.unshift(data);
    });
  }

}
