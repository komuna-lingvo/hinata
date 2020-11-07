import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { SnackbarComponent } from './@core/components/snackbar/snackbar.component';

const MODULES = [ AgmCoreModule.forRoot({ apiKey: environment.googleMapsApiKey }) ];

@NgModule({
  declarations: [ AppComponent, SnackbarComponent ],
  imports: [ BrowserModule, AppRoutingModule, ...MODULES ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
