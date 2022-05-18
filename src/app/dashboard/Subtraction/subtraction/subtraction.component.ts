import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.scss']
})
export class SubtractionComponent implements OnInit {
SubValue: any

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    console.log("Subtracted Value is:"+ this.sharedService.Sub())
    this.SubValue=this.sharedService.Sub();

  }

}
