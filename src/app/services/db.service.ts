import { Injectable } from '@angular/core';
import { collection, addDoc, query, where, getDocs, doc, deleteDoc } from "firebase/firestore"; 
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  async addData(db: any, userEmail: string, cartItems: Book[]){
    const existingUser = await query(collection(db, "users"), where("email", "==", userEmail));
    const querySnapshot = await getDocs(existingUser);
    if(querySnapshot.size < 1){
      try {
        this.addDataBaseEntry(db, userEmail, cartItems);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      querySnapshot.forEach(async (userDoc) => {
        this.updateDatabaseEntry(db, userDoc, cartItems);
      });
    }
  }






  async addDataBaseEntry(db: any, userEmail: string, cartItems: Book[]) {
    var newUser: any;
    try {
      newUser = await addDoc(collection(db, "users"), {
        email: userEmail
      });
    } catch (e) {
      console.log(e)
    }
    
    cartItems.forEach(async book => {
      
      await addDoc(collection(db, "users/" + newUser.id.toString(), 'userCart'), {
        title: book.name,
        author: book.author,
        amount: book.amount,
        img: book.img
      });
    });
  }



  async updateDatabaseEntry(db: any, userDoc: any, cartItems: Book[]) {
    const allDocs = await query(collection(db, "users/" + userDoc.id.toString() + "/userCart"));
    const querySnapshot = await getDocs(allDocs);

    querySnapshot.forEach(async bookDoc => {
      await deleteDoc(doc(db, "users/" + userDoc.id.toString() + "/userCart", bookDoc.id.toString()))
    });

    cartItems.forEach(async book => {
      await addDoc(collection(db, "users/" + userDoc.id.toString(), 'userCart'), {
        title: book.name,
        author: book.author,
        amount: book.amount,
        img: book.img
      });
    });
  }
}
