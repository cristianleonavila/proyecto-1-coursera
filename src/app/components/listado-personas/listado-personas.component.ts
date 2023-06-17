import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {
  
  @Input()
  public listadoPersonas:Persona[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
