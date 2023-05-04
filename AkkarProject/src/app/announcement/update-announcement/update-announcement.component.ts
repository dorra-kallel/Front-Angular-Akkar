import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-update-announcement',
  templateUrl: './update-announcement.component.html',
  styleUrls: ['./update-announcement.component.css']
})
export class UpdateAnnouncementComponent implements OnInit {

  id : any
  a : Announcement = new Announcement();
  constructor(private announcementService : AnnouncementService , private router :Router  , private route:ActivatedRoute ) { }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.announcementService.getAnnouncement(this.id).subscribe(data=>{
    this.a = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.announcementService.updateAnnouncement(this.a,this.id)
    .subscribe(data=>{console.log(data);
      this.goToList();
    },
    error=>console.log(error));
    
  }
  goToList(){
    this.router.navigate(['announcement-list']);
  }
}
