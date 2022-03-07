import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola, mundo!';

  imagenes = [
    "../assets/imagenes/mapache_chiquito.jpg",
    "../assets/imagenes/mapache_gordo.jpg",
    "../assets/imagenes/mapache_pizza.jpg"
  ];

  ingles = false;
}