import { Component } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet2';
  public enteredText: string = ''; // Pour lier l'input
  public isShown: boolean = true; // Pour contrôler l'affichage de la liste
  public buttonLabel: string = 'Activer la couleur aléatoire'; // Pour le bouton de couleur
  public sortingModeLabel: string = 'Mode de tri'; // Pour le bouton de tri
  public isSorted: boolean = false; // Propriété pour contrôler le mode de tri

  constructor(public listService: ListService) { }

  showGreeting() {
    console.log("Bonjour !");
  }
  
  show() {
    this.isShown = !this.isShown; // Bascule l'affichage de la liste
  }

  // Ajouter un nouvel item
  extractText() {
    if (this.enteredText.trim()) {
      this.listService.addItem(this.enteredText); // Ajoute l'élément au service
      this.enteredText = ''; // Réinitialise l'input
    }
  }

  // Supprimer le dernier item
  deleteLastItem() {
    this.listService.deleteLastItem(); // Supprime le dernier élément
  }

  // Bascule la coloration aléatoire
  toggleRandomColoring() {
    this.listService.toggleRandomColoring(); // Appelle le service pour changer le mode de couleur
    this.buttonLabel = this.listService['randomMode'] ? 'Désactiver la couleur aléatoire' : 'Activer la couleur aléatoire'; // Met à jour le label du bouton
  }

  // Bascule le mode de tri
  toggleSortingMode() {
    this.isSorted = !this.isSorted; // Inverse l'état de tri
    if (this.isSorted) {
      this.listService.sortItems(); // Trie les éléments
      this.sortingModeLabel = 'Désactiver le tri'; // Met à jour le label du bouton
    } else {
      this.listService.unsortItems(); // Remet les éléments dans l'ordre original
      this.sortingModeLabel = 'Activer le tri'; // Met à jour le label du bouton
    }
  }

  // Retourne le texte du bouton
  getButtonText() {
    return this.isShown ? 'Masquer' : 'Afficher';
  }
}
