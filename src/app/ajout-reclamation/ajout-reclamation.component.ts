import { Component, OnInit } from '@angular/core';
import { reclamation } from '../models/reclamation';
import { ReclamationService } from '../service/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.css']
})
export class AjoutReclamationComponent implements OnInit {
  rec : reclamation = new reclamation();
  constructor(private r:ReclamationService, private _router:Router , private active:ActivatedRoute) { }

  ngOnInit(): void {
  }
  addReclammation(){
    console.log('Adding a new reclamation:', this.rec);
    this.r.addReclamation(this.rec).subscribe(()=>this._router.navigateByUrl("/reclamation"));
  }

}
