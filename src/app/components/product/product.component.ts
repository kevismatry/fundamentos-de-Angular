import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

   @Input() product: Product = {
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
   }


   @Output() addedProduct = new EventEmitter<Product>();
   @Output() showProduct = new EventEmitter<number>();

   onAddToCart() {
     this.addedProduct.emit(this.product);
   }

   onShowDetail() {
     this.showProduct.emit(this.product.id);
   }

}
