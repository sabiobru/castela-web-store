import { FooterCmsComponent } from './castelar-cms/layout/footer-cms/footer-cms.component';
import { NavbarCmsComponent } from './castelar-cms/layout/navbar-cms/navbar-cms.component';
import { SidebarCmsComponent } from './castelar-cms/layout/sidebar-cms/sidebar-cms.component';
import { HomeCmsComponent } from './castelar-cms/pages/home-cms/home-cms.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
//imports ngx-bootstrap
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SiteHomeComponent } from './castelar-site/pages/site-home/site-home.component';
import { SiteNavbarComponent } from './castelar-site/layout/site-navbar/site-navbar.component';
import { SiteFooterComponent } from './castelar-site/layout/site-footer/site-footer.component';
import { SiteSidebarComponent } from './castelar-site/layout/site-sidebar/site-sidebar.component';
=======
import { FormsModule } from '@angular/forms';
import { ClientCmsComponent } from './castelar-cms/pages/client/client-cms/client-cms.component';
import { CreateCmsComponent } from './castelar-cms/pages/client/create-cms/create-cms.component';
import { UpdateCmsComponent } from './castelar-cms/pages/client/update-cms/update-cms.component';
import { StoreCmsComponent } from './castelar-cms/pages/store/store-cms/store-cms.component';
import { CreateClientCmsComponent } from './castelar-cms/pages/client/create-client-cms/create-client-cms.component';
import { UpdateClientCmsComponent } from './castelar-cms/pages/client/update-client-cms/update-client-cms.component';
import { CreateStoreCmsComponent } from './castelar-cms/pages/store/create-store-cms/create-store-cms.component';
import { UpdateStoreCmsComponent } from './castelar-cms/pages/store/update-store-cms/update-store-cms.component';
import { ProviderCmsComponent } from './castelar-cms/pages/provider/provider-cms/provider-cms.component';
import { CreateProviderCmsComponent } from './castelar-cms/pages/provider/create-provider-cms/create-provider-cms.component';
import { UpdateProviderCmsComponent } from './castelar-cms/pages/provider/update-provider-cms/update-provider-cms.component';
>>>>>>> dev-vinicius

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SiteHomeComponent,
    SiteNavbarComponent,
    SiteFooterComponent,
    SiteSidebarComponent
=======
    HomeCmsComponent,
    SidebarCmsComponent,
    NavbarCmsComponent,
    FooterCmsComponent,
    ClientCmsComponent,
    CreateCmsComponent,
    UpdateCmsComponent,
    StoreCmsComponent,
    CreateClientCmsComponent,
    UpdateClientCmsComponent,
    CreateStoreCmsComponent,
    UpdateStoreCmsComponent,
    ProviderCmsComponent,
    CreateProviderCmsComponent,
    UpdateProviderCmsComponent,
>>>>>>> dev-vinicius
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    //imports ngx-bootstrap
    NgxNavbarModule,
    CarouselModule.forRoot(),
=======
    FormsModule
>>>>>>> dev-vinicius
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
