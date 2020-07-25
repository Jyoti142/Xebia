import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserAccount} from '../services/user-account.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
isSubmitted:boolean;
  constructor(private fBhuilder: FormBuilder, private userAccount: UserAccount, private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.fBhuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('')
    })
  }


  get loginFormData(){
    return this.loginForm.controls;
  }

  userLogin(){

if(this.loginForm.invalid){
  return false
}

    let obj = this.loginFormData.username.value;
    this.userAccount.login(obj).subscribe(
      d=> {
        console.log(d,'')
        this.router.navigate(['products']);
      },
      e=>{
        console.log(e,'w')
      }
    )

  }




}
