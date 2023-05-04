import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css']
})
export class AnnouncementDetailsComponent implements OnInit {

  id: any;
  a: Announcement = new Announcement();
  idU = 5
  constructor(private route: ActivatedRoute,private router: Router,
    private announcementService: AnnouncementService) { }

  ngOnInit() {
   

    this.id = this.route.snapshot.params['id'];
    
    this.announcementService.getAnnouncement(this.id)
      .subscribe(data => {
        console.log(data)
        this.a = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['announcement-list']);
  }
  similarList(id: number){
    this.router.navigate(['similar-announcements',id]);
  }
  addToFavourite(){
    this.announcementService.addToFavorite(this.id,this.idU).subscribe(
      data=>{
        console.log(data),
        this.FavoriteList();
      },
      error=>console.log(error)
      

    );
  }
  FavoriteList(){
    this.router.navigate(['favorite-list',this.idU]);
  }

}
