import { DetailsProviderCmsComponent } from './castelar-cms/pages/provider/details-provider-cms/details-provider-cms.component';
import { UpdateProviderCmsComponent } from './castelar-cms/pages/provider/update-provider-cms/update-provider-cms.component';
import { CreateProviderCmsComponent } from './castelar-cms/pages/provider/create-provider-cms/create-provider-cms.component';
import { ProviderCmsComponent } from './castelar-cms/pages/provider/provider-cms/provider-cms.component';
import { DetailsStoreCmsComponent } from './castelar-cms/pages/store/details-store-cms/details-store-cms.component';
import { UpdateStoreCmsComponent } from './castelar-cms/pages/store/update-store-cms/update-store-cms.component';
import { CreateStoreCmsComponent } from './castelar-cms/pages/store/create-store-cms/create-store-cms.component';
import { StoreCmsComponent } from './castelar-cms/pages/store/store-cms/store-cms.component';
import { DetailsClientCmsComponent } from './castelar-cms/pages/client/details-client-cms/details-client-cms.component';
import { UpdateClientCmsComponent } from './castelar-cms/pages/client/update-client-cms/update-client-cms.component';
import { CreateClientCmsComponent } from './castelar-cms/pages/client/create-client-cms/create-client-cms.component';
import { ClientCmsComponent } from './castelar-cms/pages/client/client-cms/client-cms.component';
import { HomeCmsComponent } from './castelar-cms/pages/home-cms/home-cms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', component: HomeCmsComponent },
  { path: 'home', component: HomeCmsComponent },

  { path: 'client', component: ClientCmsComponent},
  { path: 'client/create-client', component: CreateClientCmsComponent },
  { path: 'client/update-client/:id', component: UpdateClientCmsComponent },
  { path: 'client/details-client/:id', component: DetailsClientCmsComponent },

  { path: 'store', component: StoreCmsComponent },
  { path: 'store/create-store', component: CreateStoreCmsComponent },
  { path: 'store/update-store/:id', component: UpdateStoreCmsComponent },
  { path: 'store/details-store/:id', component: DetailsStoreCmsComponent },

  { path: 'provider', component: ProviderCmsComponent },
  { path: 'provider/create-provider', component: CreateProviderCmsComponent },
  { path: 'provider/update-provider/:id', component: UpdateProviderCmsComponent },
  { path: 'provider/details-provider/:id', component: DetailsProviderCmsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
