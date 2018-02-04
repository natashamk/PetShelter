import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  getPets(){
    return this._http.get('/pets');
  }
  deletePet(id){
    console.log("making it inside service")    
    return this._http.delete('/delete/'+id);      
  }
  createPet(pet){
    console.log("creating pet inside service")
    return this._http.post('/pets', pet);          
  }
  getOnePet(id){
    return this._http.get('/pets/'+id);
  }
  editPet(pet){
    return this._http.put('/pets', pet);
    
  }
}
