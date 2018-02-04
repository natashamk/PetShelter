import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppRoutingModule } from '../app-routing.module';
import { Routes, RouterModule, Router, Params} from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
pet: String;
id;
number = 0;
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']) 
      this.id = params['id'];
    });
    this.getDetailsFromService();
  }
  getDetailsFromService(){
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe((data) => {
      console.log("Got one pet!", data)
      this.pet = data['data'];
      console.log(this.pet)
    });
  }
  deletePet(id) {
    console.log("deleting in ts")
    this._httpService.deletePet(id).subscribe((data) => { 
      (console.log(data))});
      this.router.navigate(['/']);
  }
  increaseLikes(){
    return this.number = this.number + 1;
  }
}
