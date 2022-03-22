import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FeedComponent } from './feed.component';
import { RouterModule } from  '@angular/router';
import { PublicacionComponent } from '../publicacion/publicacion.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [FeedComponent],
    exports: [FeedComponent]
  })
  export class FeedModule { }