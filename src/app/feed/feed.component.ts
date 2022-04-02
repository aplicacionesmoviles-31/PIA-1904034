import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import swal from 'sweetalert';

import { map } from 'rxjs/operators';


import { FirebaseDbService } from '../services/firebase-db.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

//import {Post} from './';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  
  constructor(
    private http: HttpClient,
    private dbFirebase: FirebaseDbService,
    private dbF: AngularFireDatabase
  ) { 
    //this.dataRef = this.dbF.list('publicaciones');
    //this.data = dataRef.valueChanges();

    this.data = this.dbF.list('publicaciones').valueChanges();
  }

  // Respuestas de la base de datos
  resPublicaciones: any = [];

  // Inicializar publicaciones
  ngOnInit(): void {
    this.getPublicaciones().subscribe(res => {
      this.resPublicaciones = res;
    });

    this.data.subscribe(res => {
      console.log(res);
    })
  }

  //dataRef :  AngularFireList<any>;
  //data: Observable<any>;

  data: Observable<any>;
  //posts: Post = [];


  // Obtener las publicaciones
  getPublicaciones() {
    return this.dbFirebase.getPublicacionesFirebase();
  }

  deletePost(id: number): void {
    this.dbFirebase.deletePublicacion(id).subscribe(res => {
      swal('Publicación eliminada', '', 'success');
    });
  }
  

  @Input() comentario: string = '';

  publicarComentario(comment: string, i: number): void {
    this.comentario = "";
    //request
    this.dbFirebase.postComment(comment, i).subscribe(res => {
      swal('Comentario publicado', '', 'success');
    });
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