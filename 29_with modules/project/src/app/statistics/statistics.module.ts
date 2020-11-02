import { NgModule } from '@angular/core';
import { SharedModule } from '../addv/shared.module';
import { StatisticsComponent } from './statistics.component';
import { SingleStatisticComponent } from './single-statistic/single-statistic.component';



@NgModule({
  declarations: [
    StatisticsComponent,
    SingleStatisticComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    StatisticsComponent
  ]
})
export class StatisticsModule { }
