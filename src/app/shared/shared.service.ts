import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
Avalue:any;
Bvalue:any
Result:any;
  constructor() { }

  valueSend(a:any,b:any){
    this.Avalue=a;
    this.Bvalue=b;
    console.log('The values of A and B are '+ this.Avalue , this.Bvalue)
  }

  Add(){
     return (this.Avalue+this.Bvalue);
  }

  Sub(){
    return (this.Avalue-this.Bvalue);
  }
  Mul(){
    return (this.Avalue*this.Bvalue);
  }
  Div(){
    return (this.Avalue%this.Bvalue);
  }
}
