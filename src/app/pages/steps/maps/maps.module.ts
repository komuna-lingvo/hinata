import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';

@NgModule({
  declarations: [ MapsComponent ],
  imports: [ CommonModule, MapsRoutingModule, SharedModule, AgmCoreModule ],
})
export class MapsModule {}
