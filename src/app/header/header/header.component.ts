import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  OutputReceiveMessageParent:any

  constructor() { }

  receiveMessage(event: any){
    this.OutputReceiveMessageParent=event;
    console.log(event)
  }
  
  ngOnInit(): void {
  }

}
