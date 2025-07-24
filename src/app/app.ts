import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BarraTitulo } from './barra-titulo/barra-titulo';
import { Carrusel } from './carrusel/carrusel';
import { CNosotros } from './cnosotros/cnosotros';
import { CGaleria } from './cgaleria/cgaleria';
import { CContacto } from './ccontacto/ccontacto';
import { CLoginModal } from "./clogin-modal/clogin-modal";
import { CRegistroModal } from './cregistro-modal/cregistro-modal';
import { CPromociones } from "./cpromociones/cpromociones";

@Component({
    standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,
    BarraTitulo, Carrusel, CNosotros, CGaleria, CContacto,
    CLoginModal, CRegistroModal, CPromociones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'FronEnd-AMC';
  // Variables para controlar la visibilidad de las secciones 
  mostrarSoloPromociones: boolean = false;
  paginaprincipal: boolean = true;
  
  mostrarPromociones() {
    this.mostrarSoloPromociones = true;
    this.paginaprincipal = false;
  }
  mostrarpaginaprincipal() {
    this.mostrarSoloPromociones = false;
    this.paginaprincipal = true;
  }

}
