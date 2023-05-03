import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Command } from '../Models/command';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {


  private baseUrl = 'http://localhost:8089/spring';

  constructor(private http: HttpClient) { }

  ajouterCommande(command: Command, furnitureId: number[]): Observable<any> {
    const url = `${this.baseUrl}/add-command?furnitureId=${furnitureId.join('&furnitureId=')}`;
    return this.http.post(url, command);
  }
  getCommands(): Observable<Command[]> {
    return this.http.get<Command[]>(`${this.baseUrl}getAllCommands`);
  }

  getCommandById(id:number): Observable<Command> {
    return this.http.get<Command>(`${this.baseUrl}getCommandById/${id}`);
  }
  

  createCommand(command: Command): Observable<Command> {
    return this.http.post<Command>(this.baseUrl, command);
  }

  updateCommand(command: Command): Observable<Command> {
    return this.http.put<Command>(`${this.baseUrl}/${command.commandId}`, command);
  }
 
  deleteCommand(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}DeleteCommand/${id}`);
  }
  
}

