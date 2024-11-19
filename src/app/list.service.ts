import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private items: { text: string; color: string }[] = []; // Propriété pour la couleur
  private colorIndex: number = 0; // Index pour la couleur

  // Couleurs d'origine à utiliser
  private originalColors: string[] = ['green', 'blue', 'red'];
  
  // Couleurs pour le mode aléatoire (sans vert, bleu et rouge)
  private randomColors: string[] = ['orange', 'purple', 'pink', 'cyan', 'yellow', 'brown'];

  private randomMode: boolean = false; // État de la coloration aléatoire

  addItem(text: string) {
    // Ajoutez l'élément avec la couleur correspondante
    const color = this.randomMode ? this.getRandomColor() : this.originalColors[this.colorIndex];
    this.items.push({ text, color });

    // Mettez à jour l'index de la couleur
    if (!this.randomMode) {
      this.colorIndex = (this.colorIndex + 1) % this.originalColors.length; // Réinitialiser après le rouge
    }
  }

  deleteLastItem() {
    this.items.pop();
  }

  getItems() {
    return this.items;
  }

  sortItems() {
    this.items.sort((a, b) => a.text.localeCompare(b.text)); // Trie par ordre alphabétique
  }

  unsortItems() {
    this.items.reverse(); 
  }

  // Active ou désactive le mode de couleur aléatoire
  toggleRandomColoring() {
    this.randomMode = !this.randomMode;
    
    // Change la couleur de tous les éléments
    this.items.forEach(item => {
      item.color = this.randomMode ? this.getRandomColor() : this.originalColors[this.colorIndex++ % this.originalColors.length];
    });

    if (!this.randomMode) {
      this.colorIndex = 0; // Réinitialiser l'index de couleur à l'original
    }
  }

  // Générer une couleur aléatoire
  private getRandomColor(): string {
    const randomColor = this.randomColors[Math.floor(Math.random() * this.randomColors.length)]; // Choisir une couleur aléatoire de randomColors
    return randomColor;
  }
}






