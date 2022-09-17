import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database-services',
  templateUrl: './database-services.component.html',
  styleUrls: ['./database-services.component.css']
})
export class DatabaseServicesComponent implements OnInit {

  constructor() {
    console.log("Pase por base de datos Services");
  }

  ngOnInit(): void {
    console.log("Pase por base de datos ngOn");
  }

}
