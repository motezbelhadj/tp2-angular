import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { RouterModule } from '@angular/router'; // Importer RouterModule
import { ListService } from './list.service'; // Importer ListService
import { ColorService } from './color.service'; // Importer ColorService

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Ajouter FormsModule ici
    RouterModule.forRoot([]) // Configurer les routes si nécessaire
  ],
  providers: [ListService, ColorService], // Ajouter les services ici
  bootstrap: [AppComponent]
})
export class AppModule { }
