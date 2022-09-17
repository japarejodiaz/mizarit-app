import { Injectable } from '@angular/core';
import {ContactUSInfo} from "../interfaces/info-contact-us-section";
import {HttpClient} from "@angular/common/http";
import {URL_SERVICIO} from "../../environments/configuration/utilities";

@Injectable({
  providedIn: 'root'
})
export class InfoPageContactusService {

  contactUSInfo: ContactUSInfo = {};
  urlBase : string = URL_SERVICIO;

  constructor(private http: HttpClient) {
    this.loadContactUsPage();
  }

  public loadContactUsPage() {
    console.log("Servicio Contactenos inicializado 2");

    let urlFinal = this.urlBase + "assets/data/json/contact-us/contact-us.json"

    return this.http.get(urlFinal)
      .subscribe( (response: ContactUSInfo) => {
        console.log(response)
        this.contactUSInfo = response;
      });

  }
}
