import { Component, OnInit } from '@angular/core';
import { Furniture } from '../Models/furniture';
import { FurnitureService } from '../Services/furniture.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {


  furniture : Furniture = new Furniture();
  selectedFile!: File;


  constructor(private f:FurnitureService, private _router:Router , private active:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  addFurniture(){
    console.log();
    this.f.addFurniture(this.furniture).subscribe(()=>this._router.navigateByUrl("/furniture"));
  }
  
/*  addFurniture() {
    this.f.addFurniture(this.furniture, this.selectedFile)
      .subscribe(() => this._router.navigateByUrl("/furniture"));
  }
  
  onFileSelected(event: any) {
    const file: File | null = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }*/
  
  }
  


  
  /*addFurniture(){
    console.log();
    this.f.addFurniture(this.furniture).subscribe(()=>this._router.navigateByUrl("/furniture"));*/

   /* console.log(this.furniture);
    this.f.addFurniture(this.furniture).subscribe(()=>this._router.navigateByUrl("/furniture"));
    //console.log(this.furniture);*/
   /* this.active.snapshot.params['id']!= null 
    ?
    this.f.addFurniture(this.furniture).subscribe(()=>this._router.navigateByUrl("/furniture"))
    :
    this.f.addFurniture(this.furniture).subscribe(()=>this._router.navigateByUrl("/furniture"))
  console.log(this.furniture)*/



