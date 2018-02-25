import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from '../../../services/organizations/organizations.service';
import { ServicesService } from '../../../services/services/services.service';
import { Organization } from '../../../essences/Organization';
import { Service } from '../../../essences/Service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public services: Service[];
  
  private customerName: string;
  private customerPhone: string;
  private customerService: Service;

  constructor(
    private organizationsService: OrganizationsService,
    private servicesService: ServicesService,
  ) { }

  ngOnInit() {
  }

  onOrganizationSelect(organizationId: number) {
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
