import { Component, OnInit } from '@angular/core';
import { BranchService } from '../shared/services/branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branchList;
  constructor(private myBranchService: BranchService) { }

  ngOnInit() {
    this.branchList = this.myBranchService.branchesArray;
  }
}
