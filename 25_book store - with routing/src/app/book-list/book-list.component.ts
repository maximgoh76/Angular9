import { Component } from '@angular/core';

import { RootObject } from "./../shared/models/book-root-object.model";
import { Book } from '../shared/models/book.model';
import { BookService } from '../shared/services/book-service.services';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
    public localBookData: RootObject;

    public setSelectedBook(bookId: string): void {
        for (let i of this.localBookData.items) {
            if (i.id == bookId) {
                this.myBookService.selectedBook.selected = i;
            }
        }
    }

    public shortTitle(title:string):string{
        if(title.length>13){
            return title.substring(0,13)+"...";
        }
        return title;
    }

    public searchBooks(str:string) {
        this.myBookService.initBooks(str);
    }

    public constructor(private myBookService: BookService) {
        this.localBookData = this.myBookService.bookInfo;

        for (let i = 0; i < this.localBookData.items.length; i++) {
            let temp: string = this.localBookData.items[i].volumeInfo.title;
            this.localBookData.items[i].volumeInfo.title = temp.substring(0, 16);
        }
    }

}
