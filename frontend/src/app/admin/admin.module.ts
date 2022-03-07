import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    HeaderComponent,
    ProductComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers:[],
  bootstrap:[AdminComponent]
})
export class AdminModule { }
