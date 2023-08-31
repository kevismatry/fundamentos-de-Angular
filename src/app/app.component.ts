import { Component } from '@angular/core';
import { product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Facundo';
  age = 21;
  img = 'https://source.unsplash.com/random';
  btnDisable = true;
  register = {
    name: '',
    email: '',
    password: '',
  }
  persona = {
    name: 'Kevin',
    age: 24,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  names: string[] = [ 'Kevin', 'Juli', 'Santi'];
  newName = '';
  box = {
    width: 10,
    height: 100,
    background: 'red'
  };
  products: product[]  = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: '../assets/image/imagen 1.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: '../assets/image/imagen 2.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: '../assets/image/imagen 3.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: '../assets/image/imagen 4.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: '../assets/image/imagen 5.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: '../assets/image/glasses-657d9ca0-258e-4d6d-ba49-1a933caaeee9.jpg'
    }
  ]

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge(){
    this.persona.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName (event: Event) {
    const element = event.target as HTMLInputElement;
    this.persona.name =  element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register)
  }
}
