
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../services/cart.service';
import { DbService } from '../services/db.service';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html', 
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = []; 

  isShowing: boolean = true;

  constructor(private booksService: BooksService ) {   }

  async ngOnInit(): Promise<void> {
    this.books = this.booksService.getBooks();
  }

}

