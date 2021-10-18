import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['../../app.component.css']
})
export class ContadorComponent {

    numero: number = 1;

    sumar() {
        this.numero += 1;
    }

    restar() {
        this.numero -= 1;
    }
}