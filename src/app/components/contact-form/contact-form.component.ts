import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 public username:string = "";
 @ViewChild('name') name : ElementRef;
 @ViewChild('email') email : ElementRef;
 @ViewChild('text') text : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  public onFormBtnClick(name:string, email:string, text:string) {
    alert(name + email + text);
    // use server side to send request  email
  }
}
