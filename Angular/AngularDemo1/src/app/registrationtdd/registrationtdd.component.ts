import { ViewChild, ElementRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrationtdd',
  templateUrl: './registrationtdd.component.html',
  styleUrls: ['./registrationtdd.component.css']
})
export class RegistrationtddComponent {
  @ViewChild('contactForm',{}) contactForm: NgForm;
 
  contact:contact;
 
  ngOnInit() {
 
    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };
 
  }
 
  onSubmit(contactForm) {
    console.log(this.contactForm.value);
  }
 
}
 
export class contact {
  firstname:string;
  lastname:string;
  gender:string;
  isToc:boolean;
  email:string;
} 
 