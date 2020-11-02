import { Component, OnInit } from '@angular/core';
import {Doctor} from './shared/models/doctor.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
