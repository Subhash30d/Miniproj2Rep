import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {
  compVar="/leftnav/company"
  researchVar="/leftnav/research"
  resourceVar="/leftnav/resources"
  sendVar="main"
  @Output() sendMessagecomp= new EventEmitter<any>();
  sendData="Message sent from LeftNav to Main component"



  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.sendMessagecomp.emit(this.sendData);
  }

}
