import { NgModule } from '@angular/core';
import { SharedModule } from '../addv/shared.module';
import { StatisticsComponent } from './statistics.component';
import { SingleStatisticComponent } from './single-statistic/single-statistic.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StatisticsComponent,
    SingleStatisticComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'info', component:StatisticsComponent}
    ])
  ],
  exports:[
    StatisticsComponent
  ]
})
export class StatisticsModule { }
