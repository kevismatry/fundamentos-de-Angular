import { Component, OnInit } from '@angular/core';
import { StoreService} from '../../services/store.service'
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;
  token = '';
  profile: User | null = null
  AuthService: unknown;


    constructor(
      private StoreService: StoreService
    ) {
    }

   ngOnInit(): void {
    this.StoreService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
   }

   toggleMenu() {
    this.activeMenu = !this.activeMenu
   }

   login() {
    // this.AuthService.login('cristianoronaldo88.com', '1212')
     //.suscribe((rta: { access_token: string; }) => {
     // this.token = rta.access_token;
     // console.log(this.token);
     // this.getProfile();
     //});
     this.AuthService.loginAndGet('ismaelmaxi99@gmail.com', '1212')
     .suscribe(user => {
      this.profile = user;
      this.token = '---';
     })
   }


   getProfile() {
    this.AuthService.getprofile(this.token)
    //.subscribe((user => {
   //   this.profile = user;
   // })
   }
}
