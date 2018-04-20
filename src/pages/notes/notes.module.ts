import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { NotesPage } from './notes';

@NgModule({
  declarations: [
    NotesPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesPage),
    TranslateModule.forChild()
  ],
  exports: [
    NotesPage
  ]
})
export class NotesPageModule { }
