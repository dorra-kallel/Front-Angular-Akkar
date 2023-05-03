import { Injectable } from '@angular/core';
import { Papers} from './models/papers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PapersService {
  papersURL : string ="http://localhost:8089/spring/Papers/";
  constructor(private myHttp : HttpClient) { }

  addPaper(Paper: Papers,idRE:number){
    return this.myHttp.post(this.papersURL+"add/"+idRE,Paper)
  }
  getPapers():Observable<Papers[]>{
    return this.myHttp.get<Papers[]>(this.papersURL+"documents");

  }
  getPapersByRealEstate(id: number):Observable<Papers[]>{
    return this.myHttp.get<Papers[]>(this.papersURL+"real-estate/"+id+"/documents");

  }
  getPaperById(PaperId : number):Observable<Papers>{
    return this.myHttp.get<Papers>(this.papersURL+"documents/"+PaperId);

  }

  deletePaper(paperId:number){
console.log("work");
    return this.myHttp.delete(this.papersURL+"documents/"+paperId);
  }


}
