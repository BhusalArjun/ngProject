import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, AbstractControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 dob: any;
 showAge: any;
 convertAge: any;
 timeDiff: any;
 
 
  userForm: FormGroup = new FormGroup({});
  submitted = false;
  disabled = false;
  constructor( 
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ){}
  

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      name:[undefined],
      email:[undefined],
      address:[undefined],
      dob:[undefined],
      age:[undefined],
      contacts: new FormArray([])
    });
    this.initContacts();
  }

  initContacts() {
    (this.userForm.get('contacts') as FormArray).push(
      this.formBuilder.group({
        mobileNumber:[undefined],
         id:[undefined],
        email:[undefined],
        userId: [undefined]
      })
    )
  }

  get getContactForm(): FormArray {
    return (this.userForm.get('contacts') as FormArray);
  }


    onSubmit(user: any): void {
      this.userService.addUsers(user).subscribe(
        (response: any) => {
          console.log(response);
          alert('New user has been added');
        }, (error: any) => {
          console.error(error);
        }
      );
    }

    onBack(){
      this.router.navigateByUrl('/home/users');
    }

    get forms(): { [key: string]: AbstractControl } {
      return this.userForm.controls;
    }

    onChange(event: any) {
      console.log(event.checked);
    }

    ageCalculator(number: any){
       if(this.userForm.value.dob){
          this.convertAge = new Date(this.userForm.value.dob);
          this.timeDiff = Math.abs(Date.now() - this.convertAge.getTime());
        this.showAge = Math.floor((this.timeDiff / (1000*3600*24))/365);
        this.userForm.patchValue({age:this.showAge})
     }
    }

    // addMore(number: any){
    //   (this.userForm.get('contacts') as FormArray).push(j);
    // }

    deleteContactForm(i: number){
       (this.userForm.get('contacts') as FormArray).removeAt(i);
    }
    

}
