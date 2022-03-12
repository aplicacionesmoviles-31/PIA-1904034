import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() comentario: string = '';

  postComment(comentario: string, publicacion: any): void {
    publicacion.comentario = this.comentario;
    this.comentario = "";
  }

  publicaciones = [ {
    "usuario": "@max",
    "imagen": "https://media.tenor.com/images/3fccf5eb3a083b64754997ddf0a8d3ce/tenor.gif",
    "caption": "Aqui en Cancun...",
    "comentario": ""
  },
  {
    "usuario": "@amsiedad",
    "imagen": "../assets/imagenes/amsiedad.webp",
    "caption": "Me da amsiedad...",
    "comentario": ""
  },
  {
    "usuario": "@perrillo",
    "imagen": "../assets/imagenes/meme-perrillo.jpeg",
    "caption": "Unos perrillos :( ",
    "comentario": ""
  }
  ];


}