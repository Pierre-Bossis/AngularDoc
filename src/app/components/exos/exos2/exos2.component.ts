import { Component } from '@angular/core';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-exos2',
  templateUrl: './exos2.component.html',
  styleUrls: ['./exos2.component.css']
})
export class Exos2Component {
  index: number = 0
  listeArticles: Article[] = [
    { id: 1, nom: 'article1', prixHTVA: 12.5, categorie: 'categ1', descriptif: 'description' },
    { id: 2, nom: 'article2', prixHTVA: 10.5, categorie: 'categ3', descriptif: 'description' },
    { id: 3, nom: 'article3', prixHTVA: 7, categorie: 'categ2', descriptif: 'description' },
    { id: 4, nom: 'article4', prixHTVA: 9, categorie: 'categ2', descriptif: 'description' },
    { id: 5, nom: 'article5', prixHTVA: 3, categorie: 'categ1', descriptif: 'description' },
    { id: 6, nom: 'article6', prixHTVA: 25.45, categorie: 'categ3', descriptif: 'description' },
    { id: 7, nom: 'article7', prixHTVA: 11.90, categorie: 'categ1', descriptif: 'description' },
  ]
  openPanel(i: number) {    
    this.index = i
  }
}
