import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoFooterSection} from "../interfaces/info-footer-section";
import { URL_SERVICIO } from '../../environments/configuration/utilities';

@Injectable({
  providedIn: 'root'
})
export class InfoPageFooterService {


  infoFooterSection: InfoFooterSection = {};
  urlBase : string = URL_SERVICIO;



  constructor(private http: HttpClient) {
    this.loadFooterPage();
  }


  public loadFooterPage() {
    console.log("Servicio Footer inicializado 2");

    let urlFinal = this.urlBase + "assets/data/json/footer/footer.json"

    return this.http.get(urlFinal)
      .subscribe( (response: InfoFooterSection) => {
        console.log(response)
        this.infoFooterSection = response;
      });

  }
}
