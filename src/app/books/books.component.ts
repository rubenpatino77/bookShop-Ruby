
import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;

  author: string;

  img: string;

  amount: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name : 'Clean Code',

      author : 'Robert C Martin',

      img : "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",

      amount: 865
    },

    {
      name : 'Pramatic Programmer',

      author : 'David Thomas',

      img : "https://m.media-amazon.com/images/I/91WFb-PpoNL._AC_UY218_.jpg",

      amount: 921
    }
  ]

  

  isShowing: boolean = true;






  constructor() { }

  ngOnInit(): void {
  }

}

