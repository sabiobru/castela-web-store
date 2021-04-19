import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//imports ngx-bootstrap
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SiteHomeComponent } from './castelar-site/pages/site-home/site-home.component';
import { SiteNavbarComponent } from './castelar-site/layout/site-navbar/site-navbar.component';
import { SiteFooterComponent } from './castelar-site/layout/site-footer/site-footer.component';
import { SiteSidebarComponent } from './castelar-site/layout/site-sidebar/site-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHomeComponent,
    SiteNavbarComponent,
    SiteFooterComponent,
    SiteSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //imports ngx-bootstrap
    NgxNavbarModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
