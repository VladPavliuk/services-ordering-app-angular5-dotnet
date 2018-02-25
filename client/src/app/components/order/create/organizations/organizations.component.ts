import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrganizationsService } from '../../../../services/organizations/organizations.service';
import { Organization } from '../../../../essences/Organization';

@Component({
  selector: 'app-order-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  @Output() onOrganizationSelected = new EventEmitter<number>();

  public organizations: Organization[];

  constructor(private organizationsService: OrganizationsService) { }

  ngOnInit() {
    this.getOrganizations();
  }

  onOrganizationSelect(organizationId: any): void {
    this.onOrganizationSelected.emit(parseInt(organizationId.srcElement.value));
  }

  getOrganizations(): void {
    this.organizationsService.index()
      .subscribe(res => {
        this.organizations = res;
      });
  }

}
