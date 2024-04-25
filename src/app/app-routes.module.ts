import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductComponent } from './components/product/product.component';
import { NoFoundComponent } from './components/no-found/no-found.component';

const appRoutes: Routes = [
  {path: 'create', component: CreateProductComponent},
  {path: 'products', component: ProductComponent},
  {path: 'noFound', component: NoFoundComponent}

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
