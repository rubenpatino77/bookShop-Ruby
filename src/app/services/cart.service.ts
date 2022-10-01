import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  constructor() { }

  add(book: Book) {
    this.cart.push(book);
  }

  remove(book: Book){
    this.cart = this.cart.filter((b) => b != book);
  }

  getCart() {
    return this.cart;
  }

}
