import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveformComponent implements OnInit {

  reactiveForm: FormGroup = new FormGroup({});
  submitted = false;
  disabled = false;
  constructor( 
    private form: FormBuilder){}
  

  ngOnInit(): void {
    this.reactiveForm = this.form.group({
      firstname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    });
  }

    onSubmit(form: any): void {
      this.submitted = true;
      if(this.reactiveForm.invalid==true){
        return;
      }
     console.log(form.value);
    }

    get forms(): { [key: string]: AbstractControl } {
      return this.reactiveForm.controls;
    }
  }


