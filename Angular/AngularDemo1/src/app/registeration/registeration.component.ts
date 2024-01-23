import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
 //rform:Object ={}
  title = "Registration Form"

 rform = new FormGroup({
  fname :new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]),
  lname: new FormControl('',[Validators.required, Validators.maxLength(15),Validators.pattern("^[a-zA-Z]+$")]),
  email: new FormControl('',[Validators.email,Validators.required]),
  gender : new FormControl('',[Validators.required]),
  isMarried: new FormControl(),
  address:new FormGroup({
    city: new FormControl(),
    street: new FormControl(),
    pincode:new FormControl(),
    country:new FormControl()
  })
  
})

get firstname(){
  return this.rform.get("fname")
}

submitReg(){
  console.log(this.rform.value)
}

}
