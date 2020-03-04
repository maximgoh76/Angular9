import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';

  //https://restcountries.eu/rest/v2/all?fields=name;population
  //https://restcountries.eu/rest/v2/name/israel?fields=borders
  //https://restcountries.eu/rest/v2/name/ISR?fields=flag
}
