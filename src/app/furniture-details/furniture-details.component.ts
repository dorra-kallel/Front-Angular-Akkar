import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../Services/furniture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {

  ListFurniture : any;
  constructor(private _service:FurnitureService, private router: Router) { }

  ngOnInit(): void {
    this._service.getFurniture().subscribe(res=>{console.log(res);
      this.ListFurniture=res});
  }
  deleteFurniture(id:number){
        this._service.deleteFurnitureById(id).subscribe(()=>this._service.getFurniture()
    .subscribe(res=>{this.ListFurniture=res}));
      }
    updateFurniture(id:number){
      this.router.navigate(['/update',id]);
    }
    furnitureDetails(id:number){
      this.router.navigate(['/furniture-details', id]);
    }
    

}
