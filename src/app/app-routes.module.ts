import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductComponent } from './components/product/product.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const appRoutes: Routes = [
  {path: 'create', component: CreateProductComponent},
  {path: 'products', component: ProductComponent},
  {path: 'noFound', component: NoFoundComponent},
  {path: 'about us', component: AboutUsComponent},
  {path: 'list-products', component: ListProductsComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
