import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppRoutingModule } from '../app-routing.module';
import { Routes, RouterModule, Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
allpets:[any];
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPetsFromService();
  }
  getPetsFromService() {
    console.log("getting in pets ts")
    let observable = this._httpService.getPets();
    observable.subscribe((data) => {
      console.log("Got pets!", data)
      if (data['message'] == 'success'){
        console.log()
      this.allpets = data['data'];
      }
    });
  }
}
