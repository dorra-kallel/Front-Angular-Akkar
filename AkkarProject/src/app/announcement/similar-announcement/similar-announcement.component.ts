import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-similar-announcement',
  templateUrl: './similar-announcement.component.html',
  styleUrls: ['./similar-announcement.component.css']
})
export class SimilarAnnouncementComponent implements OnInit {
  id : any
  similarAnnoucements : any
 p :any

  constructor(private announcementService : AnnouncementService,private route : ActivatedRoute, private router : Router) { 
   
    
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSimilar();

  }
  getSimilar(){
    this.announcementService.getSimilarAnnoucements(this.id).subscribe(
      data=>this.similarAnnoucements=data
    );
  }
 
  list(){
    this.router.navigate(['announcement-list'])
  }

}
