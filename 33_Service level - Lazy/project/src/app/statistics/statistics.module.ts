import { NgModule } from '@angular/core';
import { SharedModule } from '../addv/shared.module';
import { StatisticsComponent } from './statistics.component';
import { SingleStatisticComponent } from './single-statistic/single-statistic.component';
import { RouterModule } from '@angular/router';
import { AddvService } from '../shared/addv.service';



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
  providers:[AddvService],
  exports:[
    StatisticsComponent
  ]
})
export class StatisticsModule { }
