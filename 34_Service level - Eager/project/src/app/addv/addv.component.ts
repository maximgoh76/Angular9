import { Component, OnInit, Input } from '@angular/core';
import { AddvService } from '../shared/addv.service';

@Component({
  selector: 'app-addv',
  templateUrl: './addv.component.html',
  styleUrls: ['./addv.component.css'],
  providers:[AddvService]
})
export class AddvComponent implements OnInit {

 
  @Input("sbj") sbj:string;
  @Input()serverMsg:string;
  localServerMsg:string;

  constructor(private addvService:AddvService) { }
  ngOnInit(): void {
      this.localServerMsg=this.addvService.getMsg(this.sbj);
  }

  public refreshMsg():void{
    this.localServerMsg=this.addvService.getMsg(this.sbj);
  }

}
