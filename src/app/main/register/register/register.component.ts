import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(registerForm: any){
    if(registerForm.form.status=='INVALID'){
      window.alert('Enter all the fields')
    } else{
      console.log(registerForm)
    }
  }
}
