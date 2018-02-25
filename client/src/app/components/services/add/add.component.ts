import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services/services/services.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private title: string;

  constructor(
    private servicesService: ServicesService, 
    private location: Location
  ) { }

  ngOnInit() {
  }

  onTitleInput(event) {
    this.title = event.target.value;
  }

  create(): void {
    this.servicesService.store({
      title: this.title
    }).subscribe(res => { this.location.back() });
  }

}
