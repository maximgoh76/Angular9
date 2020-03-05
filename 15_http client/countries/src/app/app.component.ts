import { Component } from '@angular/core';
import { CountryService } from './shared/services/country.service';
import { Country } from './shared/models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public countryArray:Country[];
  public  urlArray:string[];
  
  constructor(private countryService:CountryService){
    this.urlArray=this.countryService.urlArray;
    this.countryArray=this.countryService.countryArray;
  }

  public getCountries(){
    this.countryService.getAllCountries();
  }


}
