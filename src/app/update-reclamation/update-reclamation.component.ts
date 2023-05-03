import { Component, OnInit } from '@angular/core';
import { reclamation } from '../models/reclamation';
import { ReclamationService } from '../service/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {

  id!: number;
  rec: reclamation = new reclamation();

  constructor(private reclamationService: ReclamationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.reclamationService.getReclamationById(this.id).subscribe(data => {
      this.rec = data;
      });
    });
  }
  onSubmit() {
    console.log('updating reclamation', this.rec);
    this.reclamationService.updateReclamation(this.id,this.rec).subscribe(() => {
      this.goToReclamatioList();
    }, error => {
      console.log(error);
    });
  }

  goToReclamatioList() {
    this.router.navigate(['/searchDeleteReclam']);
  }

}
