import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';
import { CartService } from './services/cart.service';
import { DbService } from './services/db.service';
import { getFirestore } from "firebase/firestore";
import { BookComponent } from './books/book/book.component';
import { Book } from './types/Book';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private cartService: CartService, private dbService: DbService){}

  app: any;
  db: any;
  async ngOnInit(): Promise<void> {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
  }

  title = 'bookShop';

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  async logout() {
    await this.dbService.addData(this.db, this.authService.currentUserEmail, this.getCart());
    this.cartService.clearCart();
    this.authService.logout();
  }

  getCart(){
    return this.cartService.getCart();
  }
  
}
