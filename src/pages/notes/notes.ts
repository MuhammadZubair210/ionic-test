import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'notes-content',
  templateUrl: 'notes.html'
})
export class NotesPage {

  constructor(public navCtrl: NavController) { }

}
