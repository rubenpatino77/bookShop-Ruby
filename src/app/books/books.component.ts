
import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

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
    },

    {
      name: 'Art of Computer Programming',

      author: 'Donald John Fuller',

      img: 'https://images-na.ssl-images-amazon.com/images/I/41YakMLJktL._SX218_BO1,204,203,200_QL40_ML2_.jpg',

      amount: 1234
    },

    {
      name: 'Introduction to Algorithms',

      author: 'T Cormen',

      img: 'https://m.media-amazon.com/images/I/61EHexGRI8L._AC_UY218_.jpg',

      amount: 771
    }
  ]

  addToCart(event: Book) {
    alert(event.name);
  }

  card: Book[] = [];

  

  isShowing: boolean = true;






  constructor() { }

  ngOnInit(): void {
  }

}

