import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteEjemploComponent } from './ejemplos/componente-ejemplo/componente-ejemplo.component';
import { ComponenteBsComponent } from './ejemplos/componente-bs/componente-bs.component';
import { ComponenteBsTableComponent } from './ejemplos/componente-bs-table/componente-bs-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteEjemploComponent,
    ComponenteBsComponent,
    ComponenteBsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
