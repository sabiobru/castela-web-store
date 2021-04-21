import { HomeCmsComponent } from './castelar-cms/pages/home-cms/home-cms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeCmsComponent },
  { path: 'home', component: HomeCmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
