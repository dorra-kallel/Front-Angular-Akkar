import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idU = 5;

  constructor(private router: Router) {}
  ngOnInit(): void {
   
  }

  navigateToFavoriteList() {
    this.router.navigate(['favorite-list', this.idU]);
  }

}
