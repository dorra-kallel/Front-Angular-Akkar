import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reclamation } from '../models/reclamation';


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  readonly API_URL="http://localhost:8089/spring"
  //readonly API_URL="http://localhost:8089/spring/swagger-ui/index.html"

  readonly ENDPOINTS="/reclamations/"

  constructor(private httpClient : HttpClient ) {}

  getAllReclamations() {
    return this.httpClient.get(this.API_URL+this.ENDPOINTS);
  }
  
 
  getReclamationById(id: number): Observable<reclamation> {
    return this.httpClient.get<reclamation>(`${this.API_URL}/reclamations/${id}`);
  }
  

 
  addReclamation(r: reclamation): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/reclamations/add`, r);
  }


  deleteReclamation(id: number) {
    return this.httpClient.delete(`${this.API_URL}/reclamations/`+id);
  }

  updateReclamation(id: number, r: reclamation): Observable<Object> {
    return this.httpClient.put(`${this.API_URL}/reclamations/update/${id}`,r);
}

}
