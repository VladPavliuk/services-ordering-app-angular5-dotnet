import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent as OrganizationsIndexComponent } from './components/organizations/index/index.component'
import { AddComponent as OrganizationAddComponent } from './components/organizations/add/add.component'
import { SingleComponent as OrganizationSingleComponent } from './components/organizations/single/single.component'
import { AvailableServicesComponent as OrganizationAvailableServicesComponent } from './components/organizations/available-services/available-services.component'

import { IndexComponent as ServicesIndexComponent } from './components/services/index/index.component'
import { AddComponent as ServiceAddComponent } from './components/services/add/add.component'
import { SingleComponent as ServiceSingleComponent } from './components/services/single/single.component'

const routes: Routes = [

  { path: '', redirectTo: '/organizations-list', pathMatch: 'full' },

  { path: 'organizations-list', component: OrganizationsIndexComponent },
  { path: 'organization-add', component: OrganizationAddComponent },
  { path: 'organization/:id', component: OrganizationSingleComponent },
  { path: 'organization/:id/available-services', component: OrganizationAvailableServicesComponent },

  { path: 'services-list', component: ServicesIndexComponent },
  { path: 'service-add', component: ServiceAddComponent },
  { path: 'service/:id', component: ServiceSingleComponent },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
