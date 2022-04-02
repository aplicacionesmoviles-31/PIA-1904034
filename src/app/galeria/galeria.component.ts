import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseDbService } from '../services/firebase-db.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private bd: FirebaseDbService
  ) { }

  ngOnInit(): void {
    this.getGaleria().subscribe(res => {
      this.resGaleria = res;
    })
  }

  galeria = true;

  mostrarGaleria(mostrar: boolean) {
    this.galeria = mostrar;
  }

  resGaleria: any = [];

  getGaleria() {
    return this.bd.getPublicacionesFirebase();
  }
}