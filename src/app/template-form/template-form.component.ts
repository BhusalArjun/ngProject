import { Component, OnInit } from '@angular/core';
import { NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
clicked = false;
user = {
  firstname: '',
  lastname: '',
  address: '',
  email: '',
  password: ''
}
  

  onSubmitForm(f: NgForm){
    this.clicked = true;
    this.user.firstname = f.value.userData.firstname;
    this.user.lastname = f.value.userData.lastname;
    this.user.address = f.value.userData.address;
    this.user.email = f.value.userData.email;
    this.user.password = f.value.userData.password;
  }
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
