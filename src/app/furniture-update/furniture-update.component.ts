import { Component, OnInit } from '@angular/core';
import { Furniture } from '../Models/furniture';
import { FurnitureService } from '../Services/furniture.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-furniture-update',
  templateUrl: './furniture-update.component.html',
  styleUrls: ['./furniture-update.component.css']
})
export class FurnitureUpdateComponent implements OnInit {

  id!: number;
  furniture: Furniture = new Furniture();

  constructor(private furnitureService: FurnitureService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.furnitureService.getFurnitureById(this.id).subscribe(data => {
        this.furniture = data;
      });
    });
  }

  onSubmit() {
    console.log();
    this.furnitureService.updateFurniture(this.id,this.furniture).subscribe(() => {
      this.goToFurnitureList();
    }, error => {
      console.log(error);
    });
  }

  goToFurnitureList() {
    this.router.navigate(['/detailsF']);
  }

}
  


