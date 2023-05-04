import { Injectable } from '@angular/core';
import { Reservation } from './models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationURL : string ="http://localhost:8089/spring/Reservation/";
  constructor(private myHttp : HttpClient) { }

  addReservation(reservation :Reservation,realEstateId:number){
    return this.myHttp.post(this.reservationURL+"add-Reservation/"+realEstateId+"/1",reservation)
  }
  exportPDF(ReservationId:number){
    return this.myHttp.get(this.reservationURL+ ReservationId+"/pdf");
  }
  cancelReservation(reservationId:number){
    return this.myHttp.put(this.reservationURL+"cancelReservationIfWithinTwoDays/"+reservationId,null);

  }
  getReservationsByRealEstate(REid: number):Observable<Reservation[]>{
    return this.myHttp.get<Reservation[]>(this.reservationURL+"GetByRealEstate/"+REid);

  }
  getReservationsByUserId(userId: number):Observable<Reservation[]>{
    return this.myHttp.get<Reservation[]>(this.reservationURL+"GetByUserId/"+userId);

  }
 /* calculateRevenue(cat : PostTopic):Observable<post[]>{
    return this.myHttp.get<post[]>(this.reservationURL+"get/category/"+cat);

  }*/


}
