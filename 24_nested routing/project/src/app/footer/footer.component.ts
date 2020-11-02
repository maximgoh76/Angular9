import { Component, OnInit } from '@angular/core';
import { BranchService } from '../shared/services/branch.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    userName: string = "914484-JB";
    currentYear: number = new Date().getFullYear();
    numOfBranches: number;

    constructor(private myBranchService: BranchService) { }

    ngOnInit() {

        //check if the array is not undefined or null
        if (this.myBranchService.branchesArray)
            this.numOfBranches = this.myBranchService.branchesArray.length;
        else
            this.numOfBranches = undefined;
    }

}
