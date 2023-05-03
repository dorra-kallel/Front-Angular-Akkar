import { Component, OnInit } from '@angular/core';
import { Furniture } from '../Models/furniture';
import { FurnitureService } from '../Services/furniture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandService } from '../Services/command.service';
import { Command } from '../Models/command';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  id!: number;
  furniture: Furniture = new Furniture();
  command: Command = new Command();
  furnitureIds: number[] = [];

  constructor(private furnitureService: FurnitureService,
              private route: ActivatedRoute,
              private router: Router,
              private commandeService:CommandService
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.furnitureService.getFurnitureById(this.id).subscribe(data => {
        this.furniture = data;
      });
    });
  }
  calculerPrixTotal() {
    this.command.totalPrice = this.furniture.furniture_price * this.command.quantity;
  }

  ajouterCommande() {
    console.log();
    this.calculerPrixTotal();
    this.command.totalPrice = this.calculerPrixTotal();
   
    this.commandeService.ajouterCommande(this.command, this.furnitureIds).subscribe(() => {
      console.log('Commande ajoutée avec succès !');
    }, (error) => {
      console.error('Erreur lors de l\'ajout de la commande :', error);
    });
  }

}

