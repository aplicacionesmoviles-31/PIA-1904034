import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Firebase App
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from  'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


//temporalmente aqui
import { BioComponent } from './bio/bio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    BioComponent, 
    GaleriaComponent,
    PublicacionComponent,
    PerfilComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RoutesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }