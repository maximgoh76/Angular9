import { Component } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    template: '<img [src]="imgLink"/>',
    styles: [`
    img{
        width:50%;
        margin:55px;
        margin-left:25%;
        display:inline-block;
    }
    `]
})
export class PageNotFoundComponent {
    imgLink: string = "/assets/images/Page-not-found.png";
}
