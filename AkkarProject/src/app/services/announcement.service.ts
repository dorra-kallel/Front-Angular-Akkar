import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private baseUrl = 'http://localhost:8081';
  constructor( private httpClient : HttpClient  ) { }
  addAnnouncement(announcement : any):Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/addAnnouncement`,announcement);
  }
  getAll():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllAnnouncement`);
  }
  getAnnouncement(id : any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAnnouncement/${id}`);
  }
  updateAnnouncement( announcement: any, id : any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/updateAnnouncement/${id}`, announcement);
  }

  deleteAnnouncement(id: any): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/deleteAnnouncement/${id}`, { responseType: 'text' });
  }
  getSimilarAnnoucements(id : any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/similar/${id}`);
  }
  getLowerPrice(price : any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getLowerPrice/${price}`);
  }
  addToFavorite(announcementId : any,userId :any):Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/addFavorite/${announcementId}/${userId}`,{});
  }
  getFavouriteAnnoucements(userId : any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getFavorites/${userId}`);
  }
}
