import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usuario = {
    "nombre":"Max",
    "alias": "@maxelperrito",
    "fotoPerfil": "../assets/imagenes/meme-perrillo.jpeg",
    "seguidores": 9437834754985,
    "seguidos": 1,
    "bio": "Guau", 
    "publicaciones": [
      { 
        "usuario": "",
        "imagen": "https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif",
        "caption": "",
        "comentario": "",
        "id": "1"
      },
      { 
        "usuario": "",
        "imagen": "https://media1.tenor.com/images/728b1bf7d68319216cc3d889d8d4464a/tenor.gif?itemid=14799468",
        "caption": "",
        "comentario": "",
        "id": "2"
      },
      { 
        "usuario": "",
        "imagen": "https://th.bing.com/th/id/R.42455498933d57e8af7156813472d0fa?rik=ZY14wlbzBPkQ%2bA&pid=ImgRaw&r=0",
        "caption": "",
        "comentario": "",
        "id": "3"
      },
    ]
  }

}