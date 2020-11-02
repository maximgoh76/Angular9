import { Component, OnInit } from '@angular/core';
import {Doctor} from './shared/models/doctor.model';
import { AddvService } from '../shared/addv.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  public readonly doctorArr:Doctor[]=[
    new Doctor("Bob",22),
    new Doctor("Alice",14),
    new Doctor("Tom",3)
  ];
  public serverMsg:string;

  constructor(private addvService:AddvService) { 
    this.serverMsg=this.addvService.getMsg("doctors");
  }

  ngOnInit(): void {
  }

}
