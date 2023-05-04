import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Expert } from '../model/expert';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  constructor(private http: HttpClient) { }

  public addExpert(expert: Expert)
  {
    return this.http.post("http://localhost:8089/spring/Expert",expert,{responseType:'text'as'json'});
  }
  public getExperts()
  {
    return this.http.get("http://localhost:8089/spring/Expert");
  }

  public getExpertByLocation(location:string)
  {
    return this.http.get("http://localhost:8089/spring/Expert/experts/"+location)
  }

  public deleteExpert(id:number)
  {
    return this.http.delete("http://localhost:8089/spring/Expert/"+id);
  }

  public GetExpertByCin(cin:number)
  {
    return this.http.get("http://localhost:8089/spring/Expert/expertss/"+cin);
  }
}
