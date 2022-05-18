import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  DivValue:any;
  constructor(private sharedSerice: SharedService) { }

  ngOnInit(): void {
    console.log(this.sharedSerice.Div())
    this.DivValue=this.sharedSerice.Div()
  }


}
