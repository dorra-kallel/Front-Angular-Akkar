import { Component, OnInit } from '@angular/core';
import { Furniture } from '../Models/furniture';
import { Command } from '../Models/command';
import { CommandService } from '../Services/command.service';
import { FurnitureService } from '../Services/furniture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.css']
})
export class AddCommandComponent implements OnInit {
  ListFurniture : any;
  furnitue!:Furniture;
  command: Command = new Command();
  furnitureIds: number[] = [];
  constructor(private commandeService: CommandService,private _service:FurnitureService, private router: Router) { }

  ngOnInit(): void {
    this._service.getFurniture().subscribe(res=>{console.log(res);
      this.ListFurniture=res});
  }
  addToCartt(id:number){
    this.router.navigate(['/panier',id]);
  }
  addToCart(furniture: Furniture) {
    if (!this.furnitureIds) {
      this.furnitureIds = []; // Initialiser le tableau si nécessaire
    }
    this.furnitureIds.push(furniture.furniture_id);
    console.log(this.furnitureIds); // Vérifier le contenu du tableau
    this.router.navigate(['/panier']);
    this.commandeService.ajouterCommande(this.command, this.furnitureIds).subscribe(() => {
      console.log('Commande ajoutée avec succès !');
    }, (error) => {
      console.error('Erreur lors de l\'ajout de la commande :', error);
    });
  }
  
 /*
  acheter() {
    this.commandeService.ajouterCommande(this.command, this.furnitureIds).subscribe(() => {
      console.log('Commande ajoutée avec succès !');
    }, (error) => {
      console.error('Erreur lors de l\'ajout de la commande :', error);
    });
  }*/
  

}
