import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BranchService } from './shared/services/branch.service';
import { MainComponent } from './main/main.component';
import { MeatComponent } from './meat/meat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FoodService } from './shared/services/food.service';
import { FoodImgComponent } from './food-img/food-img.component';
import { FoodDescComponent } from './food-desc/food-desc.component';
import { BranchComponent } from './branch/branch.component';

const appRoutes: Routes = [

    { path: 'branch', component: BranchComponent },
    {
        path: "meats", component: MeatComponent,
        children: [
           { path: '', redirectTo: '/meats/img/Chicken', pathMatch: 'full' },
            { path: 'img/:food', component: FoodImgComponent },
            { path: 'desc/:food', component: FoodDescComponent },
        ]
    },
    {
        path: '',
        redirectTo: '/branch',
        pathMatch: 'full'
    },

    { path: '**', component: PageNotFoundComponent }

];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        MeatComponent,
        PageNotFoundComponent,
        FoodImgComponent,
        FoodDescComponent,
        BranchComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [BranchService, FoodService],
    bootstrap: [AppComponent]
})
export class AppModule { }
