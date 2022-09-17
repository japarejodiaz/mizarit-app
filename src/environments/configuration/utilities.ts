import { environment } from '../environment';

let URL_BASE_SERVICIO = "http://localhost:4200/";

if (environment.production) {

  URL_BASE_SERVICIO = "https://mizarit.com.ar/";

}

/** Variable que indica el dominio de Desa o Producccion */

export let URL_SERVICIO = URL_BASE_SERVICIO;
