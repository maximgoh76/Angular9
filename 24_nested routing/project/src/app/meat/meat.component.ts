import { Component, OnInit } from '@angular/core';
import { FoodService } from '../shared/services/food.service';
import { FoodInfo } from '../shared/models/foodInfo.model';

@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit {
  
  localMeatList: FoodInfo[];
  selectedFood:string="Chicken";
  constructor(private myFoodService:FoodService) { }

  ngOnInit() {
      this.localMeatList=this.myFoodService.meatList;
  }


  setItem(str){
      this.selectedFood=str;
  }
}
