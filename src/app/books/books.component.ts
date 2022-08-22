
import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private booksService: BooksService) {   }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

}

