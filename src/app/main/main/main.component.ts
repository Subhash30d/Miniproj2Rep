import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  router: any;
  loginVar="/main/login"
  constructor() { }
  registerVar="/main/register"
  
 receiveMessagecomp: any
  

  ngOnInit(): void {
  }
  receiveMessage(event: any){
    this.receiveMessagecomp=event;
    console.log(event)
  }
  
}
