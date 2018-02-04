import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: PetsComponent},
  { path: 'new', component: NewComponent },
  { path: 'edit/:id', component: NewComponent },
  { path: 'details/:id', component: DetailsComponent },  
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
