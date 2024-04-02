import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = "paul"
  edad = 18;
  imagen = "https://source.unsplash.com/random";
  btnDisabled = false;
  img = "";

  imgParent = "my-store";

  register = {
    name: "",
    email:"",
    password:"",
  }

  persona = {
    name: "paul",
    age: 18,
    img: "https://source.unsplash.com/random",
  }

  names: string[] = ['nico','juli','santi'];
  newName = "";

  //se crea metodo dentro de app component
  public toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.persona.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.persona.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
  }

  delete(posicion: number){
    const element = posicion;
    this.names.splice(posicion,1);
  }

  products: Product[]=[
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/juguete.jpg',
      category: 'all',
    },
    {
      name: 'Collecion de albumnes',
      price: 34,
      image: './assets/images/albunes.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  public registrar(){
    console.log(this.register);
  }

  onLoaded(img: string){
    console.log('padre', img);
    this.imgParent = img;
  }
}
