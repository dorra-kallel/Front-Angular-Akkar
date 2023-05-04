import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnouncementService } from 'src/app/services/announcement.service';
declare var window : any;
@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  p :any
  price :any
  announcements:any
  formModal : any ;
  idToDelete: any;
  constructor( private announcementService: AnnouncementService,private router:Router) { 
  this.getAll();
  
  }
  
  getAll(){
    this.announcementService.getAll().subscribe(data=>this.announcements=data);
  }
  ngOnInit(): void {
    this.formModal= new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }
  open(){
    this.formModal.show();
  }
  close(){
    
    this.formModal.hide();
  }
  
  delete(id : Number) {
    this.announcementService.deleteAnnouncement(id)
      .subscribe(
        data => {
          console.log(data);
         // this.close();
         
          this.getAll();
          this.reloadPage();
        },
        error => console.log(error));
      
  }
  

  announcementDetails(id: number){
    this.router.navigate(['annoucement-details', id]);
  }
  updateAnnouncement(id: number){
    this.router.navigate(['update-announcement', id]);
  }
  goToList(){
    this.router.navigate(['announcement-list']);
  }
  goToCreate(){
    this.router.navigate(['create-announcement']);
  }
  reloadPage(){
    window.reloadPage();
  }

  goToLower(){
    this.router.navigate(['lower-price',this.price])
  }

}
