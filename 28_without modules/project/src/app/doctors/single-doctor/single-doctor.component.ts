import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../shared/models/doctor.model';

@Component({
  selector: 'app-single-doctor',
  templateUrl: './single-doctor.component.html',
  styleUrls: ['./single-doctor.component.css']
})
export class SingleDoctorComponent implements OnInit {

  @Input("info") doctorInfo:Doctor;
  
  constructor() { }

  ngOnInit(): void {
  }

}
