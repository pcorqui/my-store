import { Component } from '@angular/core';

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
  img = "https://source.unsplash.com/random"

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
}
