import { FooterCmsComponent } from './castelar-cms/layout/footer-cms/footer-cms.component';
import { NavbarCmsComponent } from './castelar-cms/layout/navbar-cms/navbar-cms.component';
import { SidebarCmsComponent } from './castelar-cms/layout/sidebar-cms/sidebar-cms.component';
import { HomeCmsComponent } from './castelar-cms/pages/home-cms/home-cms.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeCmsComponent,
    SidebarCmsComponent,
    NavbarCmsComponent,
    FooterCmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
