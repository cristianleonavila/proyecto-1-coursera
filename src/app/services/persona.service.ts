import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personas: Persona[] = [];

  constructor() { }

  get getPersonas():Persona[] {
    return [...this.personas];
  }

  public agregarPersona(persona: Persona) {
    if ( persona.nombre && persona.apellido) {
      const genero:string = persona.genero || '',
            ruta:string = 'assets/avatar';
      persona['avatar'] = genero === 'M' ? `${ruta}/avatar-he.png` : `${ruta}/avatar-she.png`
      this.personas.push(persona);
    }
  }
}
