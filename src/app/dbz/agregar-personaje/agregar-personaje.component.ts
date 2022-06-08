import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css'],
})
export class AgregarPersonajeComponent {
  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0,
    };
  }
}
