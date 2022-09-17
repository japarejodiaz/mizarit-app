import { Component, OnInit } from '@angular/core';
import {InfoPageFooterService} from "../../services/info-page-footer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor( public infoPageFooterService: InfoPageFooterService) {
    console.log("Footer");
  }

  ngOnInit(): void {
  }

}
