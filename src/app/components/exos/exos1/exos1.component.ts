import { Component } from '@angular/core';

@Component({
  selector: 'app-exos1',
  templateUrl: './exos1.component.html',
  styleUrls: ['./exos1.component.css']
})
export class Exos1Component {
  article: string = ""
  nombre: number = 1
  panier: any[] = []
  onlyCard:boolean = false

  ajoutPanier(article: string, nombre: number) {
    if (this.panier.findIndex(item => item.article === article) === -1){
      if(nombre > 5) nombre = 5    
      this.panier.push({ article : article, nombre : nombre, date : new Date() })
    }
    else
    {
      let index = this.panier.findIndex(item => item.article === article)

      if(this.panier[index].nombre + nombre <= 5)
        this.panier[index].nombre += nombre
      else
        this.panier[index].nombre = 5
    }
  }

  supprimerDuPanier(index:number){
    this.panier.splice(index,1)
  }

  afficher(){
    this.onlyCard = !this.onlyCard
  }
}
