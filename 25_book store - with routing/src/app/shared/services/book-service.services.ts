import { Injectable } from "@angular/core";
import { Book } from "../models/book.model";
import { RootObject } from "../models/book-root-object.model";
import { HttpClient } from "@angular/common/http";


//מאפשר לשירות הנוכחי להשתמש בתוכו בשירותים אחרים
@Injectable()
export class BookService {
    selectedBook = { selected: undefined };
    bookInfo: RootObject = { items: [] };

    constructor(private myHttpClient: HttpClient) {
        this.initBooks("a");
    }

    initBooks(query: string): void {
        let apiUrl:string=`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&fields=items(id%2CvolumeInfo(subtitle%2Cdescription%2Ctitle%2Cauthors%2CimageLinks(thumbnail)%2Clanguage%2CpageCount%2CpublishedDate))`;
        
        this.myHttpClient.get(apiUrl)
            .subscribe((x: RootObject) => { this.bookInfo.items = x.items; });
    }

}