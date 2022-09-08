import { Component, OnInit } from '@angular/core';
import {InfoPageHomeService} from "../../services/info-page-home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private infoTest: InfoPageHomeService ) { }

  ngOnInit(): void {
  }

}
