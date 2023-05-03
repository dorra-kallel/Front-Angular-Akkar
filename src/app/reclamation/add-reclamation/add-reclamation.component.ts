import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/service/reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  reclamations :any;
  id!: number;
  constructor(private service:ReclamationService,private router: Router) { }
  ngOnInit(): void {
    this.service.getAllReclamations().subscribe(res=>{console.log(res);
      this.reclamations=res});

    let resp= this.service.getAllReclamations();
    resp.subscribe ((data)=> this.reclamations=data);
  }
 
  deleteReclamation(id:number){
    this.service.deleteReclamation(id).subscribe(()=>this.service.getAllReclamations()
    .subscribe(res=>{this.reclamations=res}));
   }
  
  public getReclamationById(id :number){
    let resp = this.service.getReclamationById(id);
    resp.subscribe((data)=>this.reclamations = data);
  }
  updateReclamation(id:number){
    this.router.navigate(['/update',id]);
  }
  

  

}
