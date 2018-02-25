import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  organizations: Object[] = [
    {
      id: 1,
      "name": "Kus1"
    },
    {
      id: 2,
      "name": "Kus2"
    },
    {
      id: 3,
      "name": "Kus3"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
