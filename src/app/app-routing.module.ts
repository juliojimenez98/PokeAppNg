import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { PokeDetailComponent } from './layout/poke-detail/poke-detail.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'pokemon/:id', component:PokeDetailComponent},
  {path: '', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
