import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserResponseModel } from '../model/userResponse.model';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  userId: string | undefined;

  userForm: FormGroup = new FormGroup({});

  submitted = false;
  disabled = false;
  user: User = new User();


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // getId() {
  //   this.activatedRoute.params.subscribe((param) => (this.userId = param['id']));
  // }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log('user id from params: ', params); // {id: 1}
      this.userId = params.id;
      this.getUserDetailsById();
    });
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      name: [undefined],
      email: [undefined],
      address: [undefined],
      dob: [undefined],
      contacts: new FormArray([]),
    });
    // this.initContacts();
  }

  initContacts() {
    (this.userForm.get('contacts') as FormArray).push(
      this.formBuilder.group({
        mobileNumber: [undefined],
        id: [undefined],
        email: [undefined],
        user: [this.user]
      })
    );
  }

  get getContactForm(): FormArray {
    return this.userForm.get('contacts') as FormArray;
  }

  deleteContactForm(i: number) {
    (this.userForm.get('contacts') as FormArray).removeAt(i);
  }

  getUserDetailsById() {
    this.userService.getUserDetailsById(this.userId).subscribe(
      (user: any) => {
        console.info('userdetails by id: ', user);
        this.setUserExistingDetails(user);
        this.user = user;
      },
      (error: any) => {
        console.error('user details by id error: ', error);
      }
    );
  }
  //map: to transfer the response
  //filter: to filter as per requirement
  //findIndex: to find the index of the data/value
  //reduce: to combine multiple values into single one
  //some: find value exist or not in response and return boolean value
  //find
  //a.reduce((a,b)=> a+b);
  //a.filter(v => v > 50).reduce((a, b) => a + b);
  setUserExistingDetails(user: UserResponseModel) {
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      address: user.address,
      dob: user.dob,
    });
    console.log('Contact debug=====',user.contacts);
    if (user.contacts?.length == 0) {
      return;
    }
    user?.contacts?.forEach((value) => {
      (this.userForm.get('contacts') as FormArray).push(
        this.formBuilder.group({
          mobileNumber: value?.mobileNumber,
          email: value?.email,
          id: value?.id,
          user: value?.user
        })
      );
    });
  }

  onSubmit(userDetails: UserResponseModel): void {
    this.userService.onEdit(userDetails, this.userId).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/home/users']);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onBack() {
    this.router.navigateByUrl('/home/users');
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  //response.contacts.forEach(Contact = > {
}
