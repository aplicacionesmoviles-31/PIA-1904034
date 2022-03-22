import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import swal from 'sweetalert';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  
  constructor(
    private http: HttpClient
  ) { }

  // Respuestas de la base de datos
  resPublicaciones: any = [];

  // Inicializar publicaciones
  ngOnInit(): void {
    this.getPublicaciones().subscribe(res => {
      this.resPublicaciones = res;
    }
    );
  }

  // Obtener las publicaciones
  getPublicaciones() {
    return this.http.get('https://insta-ionic-1904034-default-rtdb.firebaseio.com/publicaciones.json')
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

  likePost(id: string): void {
    
  }

  bookmarkPost(id: string): void {
    
  }
}