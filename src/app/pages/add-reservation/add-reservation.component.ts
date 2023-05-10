import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/reservation.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class AddReservationComponent implements OnInit {
  reservations : Reservation[] = [];
  id!: number;
    rese: Reservation = new Reservation();

  constructor(private Rs:ReservationService,private router: Router) { }
  ngOnInit(): void {
    this.Rs.getReservationsByUserId(1).subscribe((res) => (this.reservations = res));
  }
 addReservation(formData: any) {
    const newReservation: Reservation = {
      idRes: 0,
      checkInDate: formData.CheckIn,
      checkOutDate: formData.CheckOut,
      status: false,
      prepaymentamount: 0,
      prepaymentstatus: false,
      totalamount: 0,
      numberofresidents: formData.residents,
      idClient: 1,
      idRealEstate: formData.realestate
    };
    this.reservations.push(newReservation); console.log(newReservation);
    this.Rs.addReservation(newReservation, 1).subscribe(
      () => alert("Reservation added successfully"),
      err => {
        if (err.status === 500) {
          alert("This real estate is already reserved for this period!");
        }
      }
    );  }
  deleteReservation(reset: Reservation) {
    console.log(reset);
    console.log("test");


    this.Rs.cancelReservation(reset.idRes).subscribe(
      () => {

            alert('Reservation canceled successfully!');
          },
          error => {
            alert('Reservation cant be canceled within two days of the stay!');
          }
        );
      }



/*
  public generatePDF(id :number){
    let resp = this.Rs.get(id);
    resp.subscribe((data)=>this.reclamations = data);
  }
  updateReclamation(id:number){
    this.router.navigate(['/update',id]);
  }*/
}
