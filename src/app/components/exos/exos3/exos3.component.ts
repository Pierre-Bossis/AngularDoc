import { Component } from '@angular/core';

@Component({
  selector: 'app-exos3',
  templateUrl: './exos3.component.html',
  styleUrls: ['./exos3.component.css']
})
export class Exos3Component {
  panier: any[] = []
  onlyCard:boolean = false

  receptionnerArticle(objet:any){
    this.panier.push(objet)
    
  }

  supprimerDuPanier(index:number){
    this.panier.splice(index,1)
  }

  afficher(){
    this.onlyCard = !this.onlyCard
  }
}
