import { Component, OnInit } from '@angular/core';
import { FoodService } from '../shared/services/food.service';
import { ActivatedRoute } from '@angular/router';
import { FoodInfo } from '../shared/models/foodInfo.model';

@Component({
  selector: 'app-food-desc',
  templateUrl: './food-desc.component.html',
  styleUrls: ['./food-desc.component.css']
})
export class FoodDescComponent implements OnInit {

    localFood: FoodInfo;
    
        //שימוש בשירות מובנה של אנגולר
        constructor(private myActivatedRoute: ActivatedRoute,
            private myFoodService: FoodService) { }
    
        ngOnInit() {
            this.myActivatedRoute.params.subscribe(params => {
                this.localFood = this.myFoodService.getFoodByLinkName(params.food)
            });
        }

}
