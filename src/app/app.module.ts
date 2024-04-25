import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SwiperModule } from 'swiper/angular';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { AppRoutesModule } from './app-routes.module';
import { NoFoundComponent } from './components/no-found/no-found.component'; //version 8.4.6 versiones posteriores no tienen soporte



@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    NavBarComponent,
    CreateProductComponent,
    NoFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
