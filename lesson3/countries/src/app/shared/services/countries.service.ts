import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Country } from '../models/country.model';

import { Observable,forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  
  public countryArray:Country[]=[];
  public maxCountry:Country;
  public  urlArrya:string[]=[];

  constructor(public httpClient:HttpClient) { }

  public getAllCounties (){
    return this.httpClient.get<Country[]>("https://restcountries.eu/rest/v2/all?fields=name;population").subscribe(
      res=>{
        this.countryArray.push (...res) ;
        console.log(this.countryArray);
        this.maxCountry =this.countryArray.reduce ((prev,currntVal,index)=>{
          return (prev.population>currntVal.population)?prev:currntVal;
        })

        this.httpClient.get<Country[]>(`https://restcountries.eu/rest/v2/name/${this.maxCountry.name}?fields=borders;flag`).subscribe(
          (res)=>{
            console.log ( res[0])
            this.maxCountry.borders = res[0].borders;
              //this.httpClient.get<Country[]>(`https://restcountries.eu/rest/v2/name/${this.maxCountry.borders[0]}?fields=name;flag`),
              //this.httpClient.get<Country[]>(`https://restcountries.eu/rest/v2/name/${this.maxCountry.borders[1]}?fields=name;flag`)
            forkJoin(
              ["mac","EGY"].map( e=>this.httpClient.get<Country[]>(`https://restcountries.eu/rest/v2/name/${e}?fields=name;flag`))
            ).subscribe( res=>{
              console.log (res.filter (res=>res instanceof Array))
              res.filter (res=>res instanceof Array).map (e=>this.urlArrya.push (e[0].flag))
            },
            error=>{
              console.log (error)
             
            }
            )
            //import { Observable,forkJoin} from "rxjs";
              //https://restcountries.eu/rest/v2/name/ISR?fields=flag
          }
        )

      }
    )
  }
}

