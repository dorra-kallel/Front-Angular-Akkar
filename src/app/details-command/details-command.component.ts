import { Component, OnInit } from '@angular/core';
import { Command } from '../Models/command';
import { CommandService } from '../Services/command.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-command',
  templateUrl: './details-command.component.html',
  styleUrls: ['./details-command.component.css']
})
export class DetailsCommandComponent implements OnInit {
  id!: number;
  c: Command = new Command;
  constructor(private route: ActivatedRoute, private commandService: CommandService){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.c = new Command();
    this.commandService.getCommandById(this.id).subscribe( data => {
      this.c = data;
    });
  }

}
