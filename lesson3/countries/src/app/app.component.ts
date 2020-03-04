import { Component } from '@angular/core';
import { CountriesService } from './shared/services/countries.service';
import { Country } from './shared/models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';

  public countryArray: Country[]
  constructor(public countriesService:CountriesService){
    this.countryArray = countriesService.countryArray;
  }


  public getCountries(){
    this.countriesService.getAllCounties();
  }
}
