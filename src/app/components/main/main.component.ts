import { Component, HostBinding, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona.interface';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @HostBinding('class') claseTitulo: string = 'text-primary';

  get getPersonas():Persona[] {
    return this.personaServ.getPersonas;
  }

  constructor(
    private personaServ: PersonaService
  ) { }

  ngOnInit(): void {
  }

  public agregarPersona(persona: Persona) {
    this.personaServ.agregarPersona(persona);
  }

}
