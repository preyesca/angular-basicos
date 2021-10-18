import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class AppHeroe {

    nombre: string = "Ironman";
    edad: number = 45;

    get nombreFuncion() {
        return `${this.nombre} - ${this.edad}`;
    }

    nombreCapitalizado(): string {
        return `${this.nombre.toUpperCase()}`
    }

    cambiarNombre(): string {
        return this.nombre = "Spiderman"
    }

}