import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
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
}
