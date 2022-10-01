import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() book: Book = {} as Book;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getCart(){
    return this.cartService.getCart();
  }

  removeFromCart(book: Book){
    this.cartService.remove(book);
  }

}
