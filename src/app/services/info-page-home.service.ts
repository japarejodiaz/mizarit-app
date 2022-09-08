import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfoPageHomeService {

  constructor(private http: HttpClient) {
    console.log("Servicio About inicializado");
    this.cargarInfo();
  }


  private cargarInfo() {
    console.log("Servicio para cargar los textos de seccion home about");

    /*this.http
      .get("assets/data/about-us/about-us.json")
      .subscribe((resp: InfoPageAboutUs) => {
        this.cargada = true;
        this.info = resp;
      });*/
  }


}
