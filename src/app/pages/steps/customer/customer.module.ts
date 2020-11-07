import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [ CustomerComponent ],
  imports: [ CommonModule, CustomerRoutingModule ],
})
export class CustomerModule {}
