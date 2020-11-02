import { Injectable } from "@angular/core";
import { FoodInfo } from "../models/foodInfo.model";



@Injectable()
export class FoodService {

    meatList: FoodInfo[] = new Array<FoodInfo>();



    getFoodByLinkName(str:string):FoodInfo{

        let food:FoodInfo;

        //find הפונקציה
        //היא פונקציה מובנית שמאפשרת לבחור תא מסויים מתוך מערך לפי תנאי שנרצה
        //הפונקציה עוברת על כל תא במערך ומחזירה ערך בוליאני האם התנאי התקיים עבור התא הנוכחי או לא
        //תא עבורו חזר ערך של "אמת" הוא זה שיבחר
        food= this.meatList.find((element:FoodInfo)=>{ return element.linkName==str});

        return food;
    }
    constructor(){

        this.meatList.push(
            {
                id:1,
                name:"Chicken",
                linkName:"Chicken",
                price:89,
                img:"/assets/images/chicken.jpg",
                desc:"Spring chicken chucks with red onions and peppers on the grill with a side dish of choice"
            }
        );
        this.meatList.push(
            {
                id:2,
                name:"Classic burger",
                linkName:"burger",
                price:85,
                img:"/assets/images/classic-burger.png",
                desc:"220 g, 100% pure entrecote Served with French fries and onion rings"
            }
        );
        this.meatList.push(
            {
                id:3,
                linkName:"Veal",
                name:"Veal burger",
                price:85,
                img:"/assets/images/vegal-burger.jpg",
                desc:"Superb 200 g, 100% pure veal beef Recommended MW Served with French fries and onion rings"
            }
        );
        this.meatList.push(
            {
                id:4,
                linkName:"breast",
                name:"Grilled chicken breast",
                price:50,
                img:"/assets/images/chicken-breast.jpg",
                desc:"Herb marinated char-grilled chicken breast, served with mashed potato"
            }
        );

    }
}