import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoPageAboutUs} from "../interfaces/info-page-about-us";
import {InfoMisionAndVisionSection} from "../interfaces/info-mision-and-vision-section";
import {URL_SERVICIO} from "../../environments/configuration/utilities";
import {InfoServicesSection} from "../interfaces/info-services-us-section";

@Injectable({
  providedIn: 'root'
})
export class InfoPageHomeService  {

  infoSectionAbout: InfoPageAboutUs = {};
  infoMisionAndVisionSection: InfoMisionAndVisionSection = {};
  infoServicesSection: InfoServicesSection = {};

  urlBase : string = URL_SERVICIO;

  constructor(private http: HttpClient) {
    console.log("Servicio About inicializado");
    this.loadPage();
    this.loadPageSectionMisionAndVision();
    this.loadPageServicesSection();

  }

  private loadPage() {
    console.log("Servicio About inicializado 2");

    let urlFinal = this.urlBase + "assets/data/json/about-us/about-us.json"

    this.http.get(urlFinal)
      .subscribe( (response: InfoPageAboutUs) => {
        console.log(response)
        this.infoSectionAbout = response;
      });

  }

  private loadPageSectionMisionAndVision() {
    console.log("Servicio mision inicializado 2");

    let urlFinal = this.urlBase + "assets/data/json/about-us/mision-and-vision.json"

    this.http.get(urlFinal)
      .subscribe( (response: InfoMisionAndVisionSection) => {
        console.log(response)
        this.infoMisionAndVisionSection = response;
      });

  }

  private loadPageServicesSection() {
    console.log("Servicio Servicios inicializado 2");

    let urlFinal = this.urlBase + "assets/data/json/services/services.json"

    this.http.get(urlFinal)
      .subscribe( (response: InfoServicesSection) => {
        console.log(response)
        this.infoServicesSection = response;
      });

  }


}
