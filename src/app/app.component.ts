import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ReclamationService } from './service/reclamation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ ReclamationService ]
}) 
export class AppComponent {
  title = 'FrontAngular';
  reclamations!: any  ;
}
/*
export class AppComponent implements OnInit {
  title = 'FrontAngular';
  reclamations!: any  ;

  constructor(private reclamationService: ReclamationService) {
    this.reclamationService = reclamationService;
  }

  ngOnInit() {
    console.log('onInit....')
    this.reclamationService.getAllReclamations().subscribe((datas) => {
      this.reclamations = datas;
    })
  

}*/