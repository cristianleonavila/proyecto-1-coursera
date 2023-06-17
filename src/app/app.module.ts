import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroPersonaComponent } from './components/registro-persona/registro-persona.component';
import { MainComponent } from './components/main/main.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistroPersonaComponent,
    MainComponent,
    ListadoPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
