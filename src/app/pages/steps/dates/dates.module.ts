import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { DatesRoutingModule } from './dates-routing.module';
import { DatesComponent } from './dates.component';

@NgModule({
  declarations: [ DatesComponent ],
  imports: [ CommonModule, DatesRoutingModule, SharedModule ],
})
export class DatesModule {}
