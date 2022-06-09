import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm:FormGroup;
  constructor(private formbuilder: FormBuilder,private userservice:UsersService) {
this.registerForm=this.formbuilder.group({
  userName : ['',Validators.required],
  email : ['',Validators.required],
  password : ['',Validators.required],
})

   }

  ngOnInit(): void {
  }
  signupUser(registerForm: any){
    this.userservice.addUser(registerForm.value).subscribe(res => {})
    console.log(registerForm.value);
  }
}
