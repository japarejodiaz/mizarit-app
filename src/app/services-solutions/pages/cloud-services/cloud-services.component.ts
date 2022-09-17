import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-services',
  templateUrl: './cloud-services.component.html',
  styleUrls: ['./cloud-services.component.css']
})
export class CloudServicesComponent implements OnInit {

  constructor() {
    console.log("Pase por cloud Services");
  }

  ngOnInit(): void {
    console.log("Pase por cloud Services ngOn");
  }

}
