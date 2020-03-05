import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { RootObject } from '../shared/models/root-object.model';


@Component({
    selector: 'app-view-users',
    templateUrl: './view-users.component.html',
    styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

    myRootObject: RootObject;

    constructor(private myUsersService: UsersService) { 
       this.myRootObject=this.myUsersService.rootObject;
    }

    ngOnInit() {
    }

}
