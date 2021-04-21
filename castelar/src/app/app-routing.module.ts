import { HomeCmsComponent } from './castelar-cms/pages/home-cms/home-cms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteHomeComponent } from './castelar-site/pages/site-home/site-home.component';


const routes: Routes = [
  { path: '', component: SiteHomeComponent },
  { path: '', component: HomeCmsComponent },
  { path: 'home', component: HomeCmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
