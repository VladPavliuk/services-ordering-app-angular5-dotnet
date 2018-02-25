import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationsService } from '../../../services/organizations/organizations.service';
import { Organization } from '../../../essences/Organization';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  private organization: Organization;

  constructor(
    private route: ActivatedRoute,
    private organizationsService: OrganizationsService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.getOrganization(id);
  }

  getOrganization(id: number) {
    this.organizationsService.show(id)
      .subscribe(res => {
        this.organization = res;
      });
  }

  delete() {
    this.organizationsService.delete(this.organization.id)
      .subscribe(res => { console.log(res); this.location.back(); });
  }

}
