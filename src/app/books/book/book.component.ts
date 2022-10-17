import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;

  constructor(private cartService: CartService, private auth: AuthService) { }

  isInCart: boolean = false;

  ngOnInit(): void {
  }


  addToCart() {
    if(this.auth.isAuthenticated){
      this.isInCart = true;
      this.cartService.add(this.book);
    }
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}
