import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

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
  limit = 10;
   offset = 0;
   statusDetailt: 'loading' | 'success' | 'error' | 'init' = 'init';

  //today = new Date();
  //date = new Date(2021, 1, 21)


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){
     this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getProductsByPage(10, 0)
    .subscribe(data => {
      this.products = data;
      this.loadMore();
    });
  }


  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string){
    this.statusDetailt = 'loading';
    this.toggleProductDetail();
   this.productsService.getProduct(id)
   .subscribe(data => {
    this.toggleProductDetail();
    this.productChosen = data;
    this.statusDetailt = 'success';
   }, errorMsg =>  {
    window.alert(errorMsg);
    this.statusDetailt = 'error';
   })
  }

  readAndUpdate(id: string) {
    this.productsService.getProduct(id)
    .pipe(
      switchMap((product) =>  this.productsService.update(product.id.toString(), { title: 'change' }))
    )
    .subscribe(data => {
       console.log(data);
      });
    this.productsService.fetchReadAndUpdate(id, {title: 'change'})
      .subscribe(response => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const read = response[0];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const update = response[1];
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

  updateProduct(){
     const changes = {
      title: 'change title',
     }
     const id = `${this.productChosen.id}`;
     this.productsService.update(id, changes)
     .subscribe(data => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products[productIndex] = data;
      this.productChosen = data;
     });
  }

   deleteproduct() {
    const id = `${this.productChosen.id}`;
    this.productsService.delete(id)
    .subscribe(() => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    })
   }

   loadMore(){
    this.productsService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products.concat(data);
      this.offset += this.limit;
    });
   }

  }
