import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActionSheetController } from '@ionic/angular';

import swal from 'sweetalert';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private actionSheetController: ActionSheetController
  ) { }

  // Respuestas de la base de datos
  resUsuario: any = [];

  // Inicializar publicaciones
  ngOnInit(): void {
    this.getUsuario().subscribe(res => {
      this.resUsuario = res;
    }
    );
  }

  // Obtener las publicaciones
  getUsuario() {
    return this.http.get('https://insta-ionic-1904034-default-rtdb.firebaseio.com/usuario.json')
  }

  txtmsg: any = document.getElementById("txtmsg");
  siguiendo = false;

  editandoMensaje= false;
  editandoCorreo = false;

  seguir(): void {
    this.siguiendo = !this.siguiendo;
  }

  enviarMensaje(): void {
    this.editandoMensaje = !this.editandoMensaje;
  }

  async createActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
        },
        {
          text: 'Bloquear usuario',
          role: 'destructive',
          icon: 'trash'
        }
      ]
    });
    await actionSheet.present();
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