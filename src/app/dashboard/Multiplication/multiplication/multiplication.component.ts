import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent implements OnInit {
MulValue: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    console.log(this.sharedService.Mul())
    this.MulValue=this.sharedService.Mul()
  }

}
