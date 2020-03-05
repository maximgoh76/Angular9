import { Component, OnInit } from '@angular/core';
import { RootObject } from '../shared/models/root-object.model';
import { UserInfo } from '../shared/models/user-info.model';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: []
})
export class EditUserComponent implements OnInit {

    myRootObject: RootObject;
    editUser: UserInfo = {
        "name": "morpheus",
        "job": "leader",
        id:"2"
    };
    constructor(private myUsersService: UsersService) {
        this.myRootObject = this.myUsersService.rootObject;
    }


    updateUser(){
        this.myUsersService.editUser(this.editUser, Number(this.editUser.id));
    }

  ngOnInit() {
  }

}
