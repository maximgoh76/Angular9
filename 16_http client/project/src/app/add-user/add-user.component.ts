import { Component, OnInit } from '@angular/core';
import { RootObject } from '../shared/models/root-object.model';
import { UsersService } from '../shared/services/users.service';
import { UserInfo } from '../shared/models/user-info.model';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: []
})
export class AddUserComponent implements OnInit {

    myRootObject: RootObject;
    newUser: UserInfo = {
        "name": "morpheus",
        "job": "leader"
    };
    constructor(private myUsersService: UsersService) {
        this.myRootObject = this.myUsersService.rootObject;
    }


    addUser(){
        this.myUsersService.addUser(this.newUser);
    }
    ngOnInit() {
    }

}
