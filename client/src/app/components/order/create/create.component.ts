import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from '../../../services/organizations/organizations.service';
import { OrdersService } from '../../../services/orders/orders.service';
import { ServicesService } from '../../../services/services/services.service';
import { Organization } from '../../../essences/Organization';
import { Service } from '../../../essences/Service';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private selectedOrganization: Organization;
  public services: Service[];
  
  private customerName: string;
  private customerPhone: string;
  private customerService: Service;
  private startingDate: any;

  constructor(
    private organizationsService: OrganizationsService,
    private servicesService: ServicesService,
    private ordersService: OrdersService,
    private location: Location
  ) { }

  ngOnInit() {

  }

  setStartingDate(event): void {
    this.startingDate = event.value;
  }

  makeOrder(): void {
    this.ordersService.store({
      FirstName: this.customerName,
      LastName: this.customerPhone,
      Organization_ID: this.selectedOrganization.id,
      Service_ID: this.customerService.id,
      Price: this.customerService.price,
      Duration: this.customerService.duration,
      StartedAt: moment(this.startingDate).format('YYYY-MM-DDTHH:mm:ss')
    }).subscribe(res => {
      this.location.back();
    })
  }

  onOrganizationSelect(organizationId: number) {
    this.organizationsService.show(organizationId)
      .subscribe(res => {
        this.selectedOrganization = res;
      });

    this.organizationsService.servicesList(organizationId)
      .subscribe(res => {
        this.services = res;
      });
  }

  onCutsomerNameInput(event): void {
    this.customerName = event.target.value;
  }

  onCustomerPhoneInput(event): void {
    this.customerPhone = event.target.value;
  }

  onServiceSelect(serviceId: number) {
    this.servicesService.show(serviceId)
      .subscribe(res => {
        this.customerService = res;
      });
  }

}
