import { Component, OnInit } from '@angular/core';
import { CommandService } from '../Services/command.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-command',
  templateUrl: './display-command.component.html',
  styleUrls: ['./display-command.component.css']
})
export class DisplayCommandComponent implements OnInit {
  listCommand : any;
  constructor(private _service:CommandService, private router: Router) { }

  ngOnInit(): void {
    this._service.getCommands().subscribe(res=>{console.log(res);
      this.listCommand=res});
  }
 
    deleteCommand(id:number){
          this._service.deleteCommand(id).subscribe(()=>this._service.getCommands()
      .subscribe(res=>{this.listCommand=res}));
        }
      commandDetails(id:number){
        this.router.navigate(['/detailsC', id]);
      }
  

}
