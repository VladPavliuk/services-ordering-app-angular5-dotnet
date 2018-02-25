import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from '../../../services/organizations/organizations.service';
import { Organization } from '../../../essences/Organization';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  organizations: Organization[];

  constructor(private organizationsService: OrganizationsService) { }

  ngOnInit() {
    this.organizationsService.index()
      .subscribe(res => {
        this.organizations = res;
      });
  }

}
