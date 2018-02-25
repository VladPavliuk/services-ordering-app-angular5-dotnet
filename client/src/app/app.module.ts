import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

//> Angular material
import {  
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatStepperModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatGridListModule,
  MatSelectModule,
  MatListModule
} from '@angular/material';
//<

//> Date picker
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
//<

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/partials/header/header.component';

import { OrganizationsService } from './services/organizations/organizations.service';
import { ServicesService } from './services/services/services.service';

import { IndexComponent as OrganizationsIndexComponent } from './components/organizations/index/index.component'
import { AddComponent as OrganizationAddComponent } from './components/organizations/add/add.component'
import { SingleComponent as OrganizationSingleComponent } from './components/organizations/single/single.component'

import { IndexComponent as ServicesIndexComponent } from './components/services/index/index.component'
import { AddComponent as ServiceAddComponent } from './components/services/add/add.component'
import { SingleComponent as ServiceSingleComponent } from './components/services/single/single.component';
import { AvailableServicesComponent } from './components/organizations/available-services/available-services.component';

import { CreateComponent as CreateOrderComponent } from './components/order/create/create.component'
import { OrganizationsComponent as OrderOrganizationsComponent } from './components/order/create/organizations/organizations.component';
import { ServicesComponent as OrderServicesComponent } from './components/order/create/services/services.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrganizationAddComponent,
    OrganizationsIndexComponent,
    OrganizationSingleComponent,
    ServicesIndexComponent,
    ServiceAddComponent,
    ServiceSingleComponent,
    AvailableServicesComponent,
    CreateOrderComponent,
    OrderOrganizationsComponent,
    OrderServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatStepperModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatGridListModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [
    OrganizationsService,
    ServicesService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
