import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../models/root-object.model';
import { UserInfo } from '../models/user-info.model';



@Injectable({
    providedIn: 'root'
})
export class UsersService {


    public rootObject: RootObject = new RootObject();

    constructor(private myHttpClient: HttpClient) { 
        this.getUsers();
    }

    public getUsers() {
        this.myHttpClient
            .get<RootObject>("https://reqres.in/api/users?page=2",
                                {headers: {"content-type": "application/json" }} )
            .subscribe(
                res => {
                    this.rootObject.data = res.data;
                },
                err=>{console.log(err)}
            )
    }


    public addUser(newUser:UserInfo) {
        this.myHttpClient
            .post<UserInfo>("https://reqres.in/api/users",newUser)
            .subscribe(
                res => {
                    this.rootObject.newUser=res;
                },
                err=>{console.log(err)}
            )
    }

    public editUser(editedUser:UserInfo,id:number) {
        this.myHttpClient
            .put<UserInfo>(`https://reqres.in/api/users/${id}`,editedUser)
            .subscribe(
                res => {
                    this.rootObject.editUser=res;
                },
                err=>{console.log(err)}
            )
    }

    public deleteUser(id:number) {
        this.myHttpClient
            .delete(`https://reqres.in/api/users/${id}`)
            .subscribe(
                res => {console.log(res)},
                err=>{console.log(err)}
            )
    }
}
