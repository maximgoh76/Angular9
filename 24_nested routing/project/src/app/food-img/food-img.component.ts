import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../shared/services/food.service';
import { FoodInfo } from '../shared/models/foodInfo.model';

@Component({
    selector: 'app-food-img',
    templateUrl: './food-img.component.html',
    styleUrls: ['./food-img.component.css']
})
export class FoodImgComponent implements OnInit {

    localFood: FoodInfo;

    //ActivatedRoute שימוש בשירות מובנה של אנגולר שנקרא 
    constructor(private myActivatedRoute: ActivatedRoute,
        private myFoodService: FoodService) { }

    ngOnInit() {

        /*
        הניתוב עבור הקומפוננטה הזו נקבע ב:
          { path: 'img/:food', component: FoodImgComponent }
          זאת אומרת שהנתיב יהיה עם משתנה דינמי שיוצב לדוגמה בצורה הבאה:
          http://localhost:4200/meats/img/Chicken
          http://localhost:4200/meats/img/burger
          אנו רוצים לקרוא את הערך של הלינק
          --------------
          בכדי לגשת ולקבל את כל הפרמטרים של הלינק הנוכחי, יש פונקציה מובנית
           this.myActivatedRoute.params.subscribe(params => {
               //באיזור זה נוכל לגשת לערך הפרמטר לפי השם שנתנו לו בניתוב
           });
        */

        this.myActivatedRoute.params.subscribe(params => {
            let foodName:string=params.food;
            this.localFood = this.myFoodService.getFoodByLinkName(foodName);
        });
    }



}
