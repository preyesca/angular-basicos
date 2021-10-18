import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Ironman", "Spiderman", "Venom", "Hulk", "Thor"]
  heroeBorrado: string = '';

  deleteHeroe(): string {
    this.heroeBorrado = this.heroes.shift() || '';
    return this.heroeBorrado;
  }
}
