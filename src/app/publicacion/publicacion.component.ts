import { IonicModule } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})

export class PublicacionComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute, 
    private http: HttpClient
  ) { }

  resPublicaciones: any = [];

  ngOnInit(): any {
    this.getPublicaciones().subscribe(res => {
      this.resPublicaciones = res;
      this.buscarPublicacion();
    }
    );
  }

  getPublicaciones() {
    return this.http.get('https://insta-ionic-1904034-default-rtdb.firebaseio.com/publicaciones.json')
  }

  publicacion = this.ruta.snapshot.params['id'];
  
  publicacionDetalle: any = {}

  buscarPublicacion() {
    for (let i = 0; i < this.resPublicaciones.length; i++) {
      if (this.resPublicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.resPublicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }

  usuario = 'Azt3kCode';

  like = false;
  bookmark = false;

  likePost(): void {
    this.like = !this.like;
  }

  bookmarkPost(): void {
    this.bookmark = !this.bookmark;
  }

  @Input() comentario: string = '';

  postComment(comentario: string, publicacion: any): void {
    publicacion.comentario = this.comentario;
    this.comentario = "";
    swal("Enviado", "Comentario realizado correctamente", "success");
  }
}
