import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeaComponent } from './tea/tea.component';
import { CoffieComponent } from './coffie/coffie.component';

@NgModule({
  declarations: [
    AppComponent,
    TeaComponent,
    CoffieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
