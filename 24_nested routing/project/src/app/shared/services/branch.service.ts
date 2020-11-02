import { Injectable } from "@angular/core";
import { Branch } from "../models/branch.model";


@Injectable()
export class BranchService {


    branchesArray: Branch[] = [
        {
            address: "12 Hamasger - Tel Aviv",
            phone: "03-5986789",
            mail: "tlv@gmail.com"
        },
        {
            address: "55 Jaffo - Haifa",
            phone: "04-5986789",
            mail: "haifa@gmail.com"
        }
    ];

}