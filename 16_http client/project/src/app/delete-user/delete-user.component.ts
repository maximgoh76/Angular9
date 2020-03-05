import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: []
})
export class DeleteUserComponent implements OnInit {

    id:number=2;
    constructor(private myUsersService: UsersService) {
    }


    deleteUser(){
        this.myUsersService.deleteUser(this.id);
    }

  ngOnInit() {
  }

}
