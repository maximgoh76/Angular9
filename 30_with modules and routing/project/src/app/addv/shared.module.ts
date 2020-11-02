import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddvComponent} from './addv.component'


@NgModule({
  declarations: [AddvComponent],
  imports: [CommonModule],
  exports:[AddvComponent,CommonModule]
})
export class SharedModule { }
