import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expert } from 'src/app/model/expert';
import { ExpertService } from 'src/app/service/expert.service';


@Component({
  selector: 'app-expert-register',
  templateUrl: './expert-register.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class ExpertRegisterComponent implements OnInit {
  Expert:Expert=new Expert(2,new Date(2023,3,25),"","","","","",1,"","",1,"",true);
  message:any;
  constructor(private service:ExpertService,private router:Router) { }

  ngOnInit(): void {
  }
  public registerNow(){
    let res=this.service.addExpert(this.Expert);
    res.subscribe(()=>this.router.navigateByUrl("/AllExperts"));
      }

}
