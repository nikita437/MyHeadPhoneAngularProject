import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rdashboard',
  templateUrl: './rdashboard.component.html',
  styleUrls: ['./rdashboard.component.css']
})
export class RdashboardComponent implements OnInit {
  register:any=[]

  delete(id)
  {
    this.dataservice.deleteData(id).subscribe((res)=>
    {
      alert("Data deleted successfully..")
      this.getRegisterData()
    })
  }

  getRegisterData()
{
  //console.log(this.form.value)
  //this.register.push(this.form.value);
  this.dataservice.getData().subscribe((res)=> {
    this.register=res
  })
}

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getRegisterData()
  }

}
