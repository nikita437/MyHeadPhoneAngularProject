import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { register} from './register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  form:FormGroup
project:any=[]

getProjectData()
{
  this.dataservice.getData().subscribe((res)=> {
    this.project=res
  })
}

register()
{
  this.dataservice.saveData(this.form.value).subscribe((res)=> {
    alert("register successfully")
  })
}
  constructor(private dataservice :DataService) { }

  ngOnInit(): void 
  {
    this.getProjectData()

this.form =new FormGroup(
  {
    register_firstname:new FormControl(""),
  register_lastname:new FormControl(""),
register_email:new FormControl(""),
  register_password:new FormControl(""),
  register_repeatpassword:new FormControl("")
})

  }


}