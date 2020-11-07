import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

const components = [ InputComponent, DialogComponent, DialogBodyComponent ];

@NgModule({
  declarations: [ ...components, ButtonComponent, SnackbarComponent ],
  imports: [ CommonModule ],
  exports: [ ...components ],
})
export class CoreModule {}
