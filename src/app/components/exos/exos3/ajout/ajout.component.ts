import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  article: string = ""
  nombre: number = 1
  @Input() panier:any[] = []

  @Output() envoyerArticle: EventEmitter<any> = new EventEmitter<any>()

  ajoutPanier(article: string, nombre: number) {
    if (this.panier.findIndex(item => item.article === article) === -1){
      if(nombre > 5) nombre = 5    
      // this.panier.push({ article : article, nombre : nombre, date : new Date() })
      this.envoyerArticle.emit({article:article,nombre:nombre,date: new Date()})
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
}
