import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductComponent } from './components/product/product.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'/list-products', pathMatch: 'full'}, //default page
  {path: 'create', component: CreateProductComponent},
  {path: 'products', component: ProductComponent},
  {path: 'noFound', component: NoFoundComponent},
  {path: 'about us', component: AboutUsComponent},
  {path: 'list-products', component: ListProductsComponent},
  {path: 'list-products/:code', component: ProductDetailComponent},
  {path: '**', redirectTo: 'create'} // to redirect when is wrong typed

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
