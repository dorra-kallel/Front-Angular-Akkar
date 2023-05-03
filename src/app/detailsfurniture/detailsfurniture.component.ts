import { Component, OnInit } from '@angular/core';
import { Furniture } from '../Models/furniture';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../Services/furniture.service';

@Component({
  selector: 'app-detailsfurniture',
  templateUrl: './detailsfurniture.component.html',
  styleUrls: ['./detailsfurniture.component.css']
})
export class DetailsfurnitureComponent implements OnInit {
  id!: number;
  f: Furniture = new Furniture;
  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.f = new Furniture();
    this.furnitureService.getFurnitureById(this.id).subscribe( data => {
      this.f = data;
    });
  }

}
