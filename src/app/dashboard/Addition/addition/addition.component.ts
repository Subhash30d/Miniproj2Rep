import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
AddedValue:any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    console.log("Added Value is"+ this.sharedService.Add())
    this.AddedValue=this.sharedService.Add()
  }

  

}
