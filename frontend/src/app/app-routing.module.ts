import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './products/all-product/all-product.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  { path: '', component: AllProductComponent },
  { path: '1', component: ProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
