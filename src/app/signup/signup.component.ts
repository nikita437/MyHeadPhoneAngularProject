import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { register} from './register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  form:FormGroup;

  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private router:Router) { }


regist()
{

  console.log(this.form.value)

  this.dataservice.saveData(this.form.value).subscribe((res)=> {
console.log("data added",res);
alert("register successfully")
this.router.navigateByUrl("/")
  })
}


  ngOnInit(): void
  {
    //this.getRegisterData()

this.form =new FormGroup(
  {
    register_firstname:new FormControl(""),
  register_lastname:new FormControl(""),
  register_number:new FormControl(""),
register_email:new FormControl(""),
   register_password:new FormControl(""),
  register_repeatpassword:new FormControl("")
})

  }


}