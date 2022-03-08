import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserResponseModel } from '../model/userResponse.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  userId: string | undefined;
  userForm: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log('user id from params: ', params); // {id: 1}
      this.userId = params.id;
      this.getUserDetailsById();
    });
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      name: [undefined],
      email: [undefined],
      address: [undefined],
      dob: [undefined],
      contacts: new FormArray([])
    });
    // this.initContacts();
  }

  initContacts(){
    (this.userForm.get('contacts') as FormArray).push(
      this.formBuilder.group({
        mobileNumber:[undefined],
        id:[undefined],
        email:[undefined],
        userId: [undefined],
      })
    )
  }



  onBack(){
    this.router.navigateByUrl('home/users');
  }

  getUserDetailsById() {
    this.userService.getUserDetailsById(this.userId).subscribe((user: any) => {
      console.info('userdetails by id: ', user);
      this.setUserExistingDetails(user);
    }, (error: any) => {
      console.error('user details by id error: ', error);
    });
  }

  get getContactForm(): FormArray {
    return (this.userForm.get('contacts') as FormArray);
  }

  setUserExistingDetails(user: UserResponseModel) {
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      address: user.address,
      dob: user.dob,
    });
    if(user.contacts.length==0)
      {return;}
      user?.contacts?.forEach((value)=>{
        (this.userForm.get('contacts')as FormArray).push(
          this.formBuilder.group({
            mobileNumber: value?.mobileNumber,
            email: value?.email
          })
        )
      });
  }



}
