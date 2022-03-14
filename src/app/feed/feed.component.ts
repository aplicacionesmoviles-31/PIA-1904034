import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert';

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
    swal("Enviado", "Comentario realizado correctamente", "success");
  }

  usuario = {
    fotoPerfil: "https://media1.tenor.com/images/c0dbc6c2c624e781eb48d255ffca9a7f/tenor.gif?itemid=13016571",
    nombre: "Azt3kCode"
  }
  
  publicaciones = [ {
    "usuario": "Angelspartan01",
    "imagen": "https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif",
    "caption": "Awesome!",
    "comentario": ""
  },
  {
    "usuario": "DavJT",
    "imagen": "https://media1.tenor.com/images/728b1bf7d68319216cc3d889d8d4464a/tenor.gif?itemid=14799468",
    "caption": "Me da amsiedad...",
    "comentario": ""
  },
  {
    "usuario": "Bazz",
    "imagen": "https://th.bing.com/th/id/R.42455498933d57e8af7156813472d0fa?rik=ZY14wlbzBPkQ%2bA&pid=ImgRaw&r=0",
    "caption": "Unos perrillos :( ",
    "comentario": ""
  }
  ];

  like = false;
  bookmark = false;

  likePost(): void {
    this.like = !this.like;
  }

  bookmarkPost(): void {
    this.bookmark = !this.bookmark;
  }


}