import { User } from "./user.model";
import { UserInfo } from './user-info.model';

export class RootObject {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    newUser:UserInfo;
    editUser:UserInfo;
}



