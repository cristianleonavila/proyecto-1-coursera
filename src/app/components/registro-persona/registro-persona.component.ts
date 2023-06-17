import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GeneroValido } from 'src/app/interfaces/generos.type';
import { OcupacionValida } from 'src/app/interfaces/ocupaciones.type';
import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {

  public generos: GeneroValido[] = ['', 'M', 'F'];

  public ocupaciones: OcupacionValida[] = ['', 'Estudiante', 'Empleado', 'Independiente', 'Pensionado'];

  private nuevaPersona: EventEmitter<Persona> = new EventEmitter();

  public persona: Persona = {
    nombre: '',
    apellido: '',
    genero: '',
    ocupacion: ''
  };

  @Output()
  get getPersona(): EventEmitter<Persona> {
    return this.nuevaPersona;
  }

  constructor(

  ) { }

  private iniciarPersona() {
    this.persona = {
      nombre: '',
      apellido: '',
      genero: '',
      ocupacion: ''
    }
  }

  public agregarPersona() {
    console.log(this.persona);
    this.nuevaPersona.emit( this.persona );
    this.iniciarPersona();
    document.getElementById('nombres')?.focus();
  }

  ngOnInit(): void {}

}
