import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { StepsRoutingModule } from './steps-routing.module';
import { StepButtonComponent } from './@shared/components/step-button/step-button.component';
import { StepsService } from './@shared/services/steps.service';
import { CanLoadStepGuard } from './@shared/guards/can-load-step.guard';

const WIDGETS = [ StepButtonComponent ];
const GUARDS = [ CanLoadStepGuard ];

@NgModule({
  declarations: [ StepsComponent, ...WIDGETS ],
  imports: [ CommonModule, StepsRoutingModule ],
  providers: [ StepsService, ...GUARDS ],
})
export class StepsModule {}
