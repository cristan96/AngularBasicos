import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Iron Man', 'Spider Man', 'Ant Man', 'Bruja Escarlata'];
  heroeBorrado: string = '';

  borrarHeroe(): void{    
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
