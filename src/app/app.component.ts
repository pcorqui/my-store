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
}
