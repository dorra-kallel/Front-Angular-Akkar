import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  p :any
  id =5
  announcements: any
  constructor(private announcementService : AnnouncementService,private route : ActivatedRoute, private router : Router) { 
   
    
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getFavorite();

  }
  getFavorite(){
    this.announcementService.getFavouriteAnnoucements(this.id).subscribe(
      data=>this.announcements=data
    );
  }
 
  list(){
    this.router.navigate(['announcement-list'])
  }

}
