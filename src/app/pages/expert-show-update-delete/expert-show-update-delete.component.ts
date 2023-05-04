import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ExpertService } from 'src/app/service/expert.service';

@Component({
  selector: 'app-expert-show-update-delete',
  templateUrl: './expert-show-update-delete.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class ExpertShowUpdateDeleteComponent implements OnInit {

  constructor(private service:ExpertService,private routes:Router) { }

  experts:any;
  Location:any;
  
  ngOnInit(): void {
   let resp= this.service.getExperts();
   resp.subscribe((data)=>this.experts=data);
  }
  public findExpertByLocation()
  {
    let resp = this.service.getExpertByLocation(this.Location);
    resp.subscribe((data)=>this.experts=data);
  }
  public deleteExpert(id:number)
  {
   let resp= this.service.deleteExpert(id);
    resp.subscribe(()=>this.routes.navigateByUrl("/ExpertRegister"));
  }
  public reload()
  {
    window.location.reload();
  }
 

}
