import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../Models/furniture';
import { Observable } from 'rxjs';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  readonly API_URL="http://localhost:8089/spring/";

  constructor(private _http:HttpClient) { }

  getFurniture() {
    return this._http.get(`${this.API_URL}getAllFurniturs`);
  }

  deleteFurnitureById(id: number) {
    return this._http.delete(`${this.API_URL}DeleteFurniture/`+id);
  }

  addFurniture(f: Furniture): Observable<any> {
    return this._http.post(`${this.API_URL}add-furniture`, f);
  }
 /* addFurniture(furniture: Furniture, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('furniture', JSON.stringify(furniture));
    formData.append('image', image);
    return this._http.post(`${this.API_URL}add-furniture`, formData);
  }*/
  updateFurniture(id: number, furniture: Furniture): Observable<Object> {
    return this._http.put(`${this.API_URL}update-furniture/${id}`,furniture);
}
getFurnitureById(id: number): Observable<Furniture> {
  return this._http.get<Furniture>(`${this.API_URL}getFurnitureById/${id}`);
}



}
