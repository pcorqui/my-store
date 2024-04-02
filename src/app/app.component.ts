import { Component } from '@angular/core';
import { Product } from './components/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  imgParent = '';
  products: Product[] = [
      {
        id: '1',
        name: 'El mejor juguete',
        price: 565,
        image: './assets/images/juguete.jpg',
      },
      {
        id: '2',
        name: 'Collecion de albumnes',
        price: 34,
        image: './assets/images/albunes.jpg'
      },
      {
        id: '3',
        name: 'Mis libros',
        price: 23,
        image: './assets/images/books.jpg'
      },
      {
        id: '4',
        name: 'Casa para perro',
        price: 34,
        image: './assets/images/house.jpg'
      },
      {
        id: '5',
        name: 'Gafas',
        price: 3434,
        image: './assets/images/glasses.jpg'
      }
  
  ];

  onLoaded(img: string){
    console.log('padre', img);
    this.imgParent = img;
  }
}
