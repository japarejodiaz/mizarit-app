import { Component, OnInit } from '@angular/core';
import {InfoPageHomeService} from "../../services/info-page-home.service";
import {InfoPageContactusService} from "../../services/info-page-contactus.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public infoTest: InfoPageHomeService,
               public infoContact: InfoPageContactusService ) {

    console.log("Se publica el resultado " + infoContact.contactUSInfo);
  }

  ngOnInit(): void {
  }

}
