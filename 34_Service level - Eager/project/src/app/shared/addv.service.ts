import { Injectable } from "@angular/core";

@Injectable()
export class AddvService{

    refreshCounter:number =0;
    public getMsg(sbj:string):string{
        if(sbj=="statistics"){
            return "Dont worry" + (++this.refreshCounter);
        }
        return "Get our doctor" + (++this.refreshCounter);
    }
}
