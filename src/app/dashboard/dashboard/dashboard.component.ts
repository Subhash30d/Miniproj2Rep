import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
AddVar="/dashboard/add"
SubVar="/dashboard/sub"
MulVar="/dashboard/mul"
DivVar="/dashboard/div"
  constructor() { }

  ngOnInit(): void {
  }

}
