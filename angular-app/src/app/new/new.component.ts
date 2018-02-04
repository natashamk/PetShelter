import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppRoutingModule } from '../app-routing.module';
import { Routes, RouterModule, Router, Params } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
pet= {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""};
errMsg: String = "";
edit: Boolean = false;
petId: String;
  constructor(private _httpService: HttpService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this._router.url[1]=='e'){
      this.edit = true;
      this.getPetId();
    } else {
      this.edit = false;
    }
  }
  getPetId(){
    this.route.params.subscribe(params => {
      this.petId = params['id'];
      this.getDetailsFromService();
    });
  }
  getDetailsFromService(){
    let observable = this._httpService.getOnePet(this.petId);
    observable.subscribe((data) => {
      console.log("Got one pet!", data)
      this.pet = data['data'];
      console.log(this.pet)
    });
  }
  createPet(){
    if(this.edit){
      console.log("editing")
      this._httpService.editPet(this.pet).subscribe(data => {
        console.log("data from editing", data)
        this.NavtoPets()
        })
    } else {
    console.log("creating a pet")
    this._httpService.createPet(this.pet).subscribe(data => {
      console.log("Got created pet!", data)      
      if(data['message'] == 'success'){
        this.errMsg = null;
        this.pet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""};
        this.NavtoPets()                          
      }
      else{
        if(data['err']['errors']['name']){
        this.errMsg += data['err']['errors']['name']['message'];
        }
        if (data['err']['errors']['type']){
        this.errMsg += data['err']['errors']['type']['message'];
        } 
        if(data['err']['errors']['description']){
        this.errMsg += data['err']['errors']['description']['message']}
      }
      console.log(this.errMsg)
      });
    }
  }
  NavtoPets(){
    this._router.navigate(['/'])  
  }
}
