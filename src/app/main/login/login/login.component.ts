import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
password:any="123123";
user:any="Subhash";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(login :any){
    if(this.user=="Subhash" && this.password=="123123"){
      this.router.navigate(['/dashboard']);
    }
    else{
      window.alert("Unauthorized Access");
    }
    }

    
  }

  

