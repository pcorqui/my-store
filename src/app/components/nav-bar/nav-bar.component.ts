import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  cantidadProductos : number = 0;
  totalCarrito : number = 0;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(
      data => {console.log('esto es la data' + data);
    this.cantidadProductos = data.length;
    this.totalCarrito = 0;
    data.forEach(x => { this.totalCarrito += x.price})}
    );
  }

}
