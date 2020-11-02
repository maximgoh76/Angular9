import { Component, OnInit, Input } from '@angular/core';
import { SingleCountry } from '../shared/models/singleCountry.model';

@Component({
  selector: 'app-single-statistic',
  templateUrl: './single-statistic.component.html',
  styleUrls: ['./single-statistic.component.css']
})
export class SingleStatisticComponent implements OnInit {

  @Input() info:SingleCountry;
  public obj:typeof Object=Object;
  constructor() { }

  ngOnInit(): void {
  }

}
