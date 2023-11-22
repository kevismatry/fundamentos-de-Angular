import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {

  }


  // onLoaded(img: string) {

  // }

  toggleImg(){
    this.showImg = !this.showImg;
  }

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



  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge(){
    this.persona.age += 1;
  }

  onScroll(event: Event){
    //const element = event.target as HTMLElement;

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

  // onRegister() {

  // }

  ToggleImg(){
    this.showImg = !this.showImg;
  }


  createUser() {
   this.usersService.create({
    name: 'seba',
    email: 'sebas@mail.com',
    password: '1212'
  })
   .subscribe(rta => {
    console.log(rta);
   });
  }
   login() {
    this.authService.login('sebas@mail.com', '1212' )
     .subscribe(rta => {
      this.token = rta.access_token;
     });
   }

   getProfile() {
    this.authService.profile(this.token)
    .subscribe(profile => {
      console.log(profile);
    });
   }
}



