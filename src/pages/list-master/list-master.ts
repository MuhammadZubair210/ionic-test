import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams
} from "ionic-angular";

import { Item } from "../../models/item";
import { Items } from "../../providers/providers";

@IonicPage()
@Component({
  selector: "page-list-master",
  templateUrl: "list-master.html"
})
export class ListMasterPage {
  currentItems: Item[];

  constructor(
    public navCtrl: NavController,
    public items: Items,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {
    console.log("navParamsnavParamsnavParams",navParams);

    this.currentItems = this.items.query();

    var names = [];
    names.push("");
    localStorage.setItem("coveredPositions", JSON.stringify(names));

    var coveredPositions = JSON.parse(localStorage.getItem("coveredPositions"));
    debugger;

    for (var i = 0; i < this.currentItems.length; i++) {
      for (var j = 0; j < coveredPositions.length; j++) {
        if (this.currentItems[i].name == coveredPositions[j]) {
          this.currentItems[i].iscoverd = true;
          break;
        } else {
          this.currentItems[i].iscoverd = false;
        }
      }
    }

    debugger;
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {}

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create("ItemCreatePage");
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    });
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push("ItemDetailPage", {
      item: item
    });
  }
}
