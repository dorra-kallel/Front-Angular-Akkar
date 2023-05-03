import { Injectable } from '@angular/core';
import { Contract } from './models/contract';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractURL : string ="http://localhost:8089/spring/Contract/";
  constructor(private myHttp : HttpClient) { }

  addcContract(Contract: Contract){
    return this.myHttp.post(this.contractURL+"add-Contract",Contract)
  }
  updateContract(Contract : Contract):Observable<Contract>{
    return this.myHttp.put<Contract>(this.contractURL+"update-Contract",Contract);

  }

  deleteContract(ContractId:number){
console.log("work");
    return this.myHttp.delete(this.contractURL+"delete-Contract/"+ContractId);
  }
  getAllContracts():Observable<Contract[]>{
    return this.myHttp.get<Contract[]>(this.contractURL+"retrieveAllContracts");
	}


}
