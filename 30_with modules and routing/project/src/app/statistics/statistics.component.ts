import { Component, OnInit } from '@angular/core';
import {Total} from './shared/models/total.model'
import {SingleCountry} from './shared/models/singleCountry.model'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public obj:typeof Object=Object;

  public countryArr: SingleCountry[]=[
    {
      "name":"China",
      "confirmed": 80793,
      "suspected": 0,
      "cured": 62813,
      "dead": 3169
  },
{
     "name":"Hong Kong", 
      "confirmed": 129,
      "suspected": 0,
      "cured": 67,
      "dead": 3
  },
 {
      "name":"Taiwan",
      "confirmed": 49,
      "suspected": 0,
      "cured": 20,
      "dead": 1
  }
  ]
  public total:Total ={
    "confirmed": 126431,
    "suspected": 0,
    "cured": 68566,
    "dead": 4706,
    "updated_at": "2020-03-12 14:41:40"
};
  constructor() { 

  }

  ngOnInit(): void {
  }

}
