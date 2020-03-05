import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.model';
import {Observable,forkJoin} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public countryArray:Country[]=[];
  public urlArray:string[]=[];
  public maxCountry:Country;

  constructor(private httpClient:HttpClient) { }


  public getAllCountries(){
    if(!this.countryArray.length){
      this.httpClient
      .get<Country[]>("https://restcountries.eu/rest/v2/all?fields=name;population")
      .subscribe(res=>{
        res.map(e=>this.countryArray.push(e));

        this.maxCountry=this.countryArray[0];
        for(let i=1; i<this.countryArray.length;i++){
          if(this.countryArray[i].population>this.maxCountry.population)
              this.maxCountry=this.countryArray[i];
        }

        this.httpClient.get<Country[]>(`https://restcountries.eu/rest/v2/name/${this.maxCountry.name}?fields=name;borders`)
        .subscribe(
          res=>{this.maxCountry.borders=res[0].borders;

          forkJoin(
              ["mac","jor","EGY"]
              .map(e=>this.httpClient.get(`https://restcountries.eu/rest/v2/name/${e}?fields=name;flag`))
                     ).subscribe(
            res=>{
             
              res.map(e=>this.urlArray.push(e[0].flag));
            });
          },
          err=>console.log(err));

      
    });
  
  }
}
}
