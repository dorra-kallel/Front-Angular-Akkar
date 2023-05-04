import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit {
 
  a : Announcement = new Announcement();
  submitted = false
  constructor(private announcementService : AnnouncementService , private router :Router) {
    
   }
  
  ngOnInit(): void {
  }

 
  addAnnouncement(){
    this.announcementService.addAnnouncement(this.a).subscribe(
      data=>{console.log(data)
        this.goToList();
      },
      error=>console.log(error));
    
      
}

onSubmit() {
 
  this.addAnnouncement();  
 
}
goToList(){
  this.router.navigate(['announcement-list']);
  
}

}
