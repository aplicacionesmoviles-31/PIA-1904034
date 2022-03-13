import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  txtmsg = document.getElementById("txtmsg");
  siguiendo = false;

  editandoMensaje= false;
  editandoCorreo = false;

  usuario = {
    "nombre":"Max",
    "alias": "@Azt3kCode",
    "fotoPerfil": "https://media1.tenor.com/images/c0dbc6c2c624e781eb48d255ffca9a7f/tenor.gif?itemid=13016571",
    "seguidores": 20000,
    "seguidos": 1,
    "bio": "Guau", 
  }

  seguir(): void {
    this.siguiendo = !this.siguiendo;
  }

  enviarMensaje(): void {
    this.editandoMensaje = !this.editandoMensaje;
  }

  enviar():void {
    swal("Enviado", "Mensaje enviado correctamente", "success");
  }

  enviarEmail(): void {

  }

  desplegarOpciones(): void {
    //En proceso
  }
}