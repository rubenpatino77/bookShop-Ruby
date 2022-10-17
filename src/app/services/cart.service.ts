import { EventEmitter, Injectable, Output } from '@angular/core';
import { getDocs, collection, doc, getDoc, query, where } from 'firebase/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];
  isUpdated = false;

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

  clearCart(){
    this.cart = [];
    this.isUpdated = false;
  }

  async getUserCart(db: any, userEmail: string){
    var userId: string = "";
    const collect = query(collection(db, "users"), where("email", "==", userEmail));
    const querySnapshot = await getDocs(collect);
    if(querySnapshot.size > 0){
      querySnapshot.forEach(async (doc) => {
        userId = doc.id.toString();
      });
  
      const q = query(collection(db, "users/" + userId + "/userCart"));
      const finalSnapshot = await getDocs(q);

      finalSnapshot.forEach((bookData) => {
        var bookItem: Book = { name: "", author: "", amount: 0, img: ""};
        bookItem.name = bookData.get("title").toString();
        bookItem.author = bookData.get("author").toString();
        bookItem.amount = bookData.get("amount");
        bookItem.img = bookData.get("img").toString();
        this.cart.push(bookItem);
      });
    }
    this.isUpdated = true;
  }

}
