import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from 'src/app/@core/components/button/button.component';
import { DialogBodyComponent } from 'src/app/@core/components/dialog-body/dialog-body.component';
import { DialogComponent } from 'src/app/@core/components/dialog/dialog.component';
import { HeaderComponent } from './components/header/header.component';

const SHARED = [ HeaderComponent, DialogComponent, DialogBodyComponent, ButtonComponent ];

@NgModule({
  declarations: [ SHARED ],
  imports: [ CommonModule ],
  exports: [ ...SHARED ],
})
export class SharedModule {}
