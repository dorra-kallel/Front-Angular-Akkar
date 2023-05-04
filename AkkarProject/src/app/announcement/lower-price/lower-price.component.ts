import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-lower-price',
  templateUrl: './lower-price.component.html',
  styleUrls: ['./lower-price.component.css']
})
export class LowerPriceComponent implements OnInit {
  price :any
  announcements: any
  p:any
  constructor(private announcementService : AnnouncementService,private route : ActivatedRoute, private router : Router) { 
   
    
  }
  ngOnInit(): void {
    this.price = this.route.snapshot.params['price'];
    this.getLowerPrice();

  }
  getLowerPrice(){
    this.announcementService.getLowerPrice(this.price).subscribe(
      data=>this.announcements=data
    );
  }
 
  list(){
    this.router.navigate(['announcement-list'])
  }
 
}
