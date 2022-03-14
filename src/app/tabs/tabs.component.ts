import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  seleccion_perfil = true;
  seleccion_feed = false;

  tab_location(pagina: string):void {
    if (pagina == "perfil") {
      this.seleccion_perfil = true;
      this.seleccion_feed = false;
    } else {
      this.seleccion_perfil = false;
      this.seleccion_feed = true;
    }
  }

}