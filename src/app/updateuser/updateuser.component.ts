import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import{ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  form:FormGroup;
  register:any=[]
  id:number;

update()
{
  this.dataservice.updateData(this.id,this.form.value).subscribe((res)=> {
    alert("update successfully")
    this.router.navigateByUrl('/dashboard')
  })
}

  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void
  {
    //this.getRegisterData()
    this.activatedroute.params.subscribe((param)=>
    {
      this.id=param["id"]
     this.dataservice.getDataById(this.id).subscribe((data)=> {
      this.register=data
      this.form =new FormGroup(
        {
          register_firstname:new FormControl(this.register.register_firstname),
        register_lastname:new FormControl(this.register.register_lastname),
        register_number:new FormControl(this.register.register_number),
      register_email:new FormControl(this.register.register_email),
         register_password:new FormControl(this.register.register_password),
        register_repeatpassword:new FormControl(this.register.register_repeatpassword)
      })
    })
    })
  }

}
