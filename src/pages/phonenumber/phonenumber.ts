import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { MainPage } from "../pages";
import { HttpClient, HttpHeaders } from "@angular/common/http";

/**
 * Generated class for the PhonenumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-phonenumber",
  templateUrl: "phonenumber.html"
})
export class PhonenumberPage {
  public phonenumber = "0872718337";
  public token;
  public obj = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: HttpClient
  ) {
    this.storage.ready().then(() => {
      this.storage.get("isLoggedIn").then(val => {
        if (val == true) {
          console.log(val.token);
          // this.token = val.token;
          // this.navCtrl.push(MainPage);
          // this.navCtrl.push(PhonenumberPage);
        }
        console.log("Isloggedin is", val);
      });
    });

    this.storage.ready().then(() => {
      this.storage.get("token").then(val => {
        console.log(val);
        this.token = val;
        // this.navCtrl.push(MainPage);
        // this.navCtrl.push(PhonenumberPage);
      });
    });
    // });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PhonenumberPage");
  }

  callApi() {
    console.log(this.token);
    setTimeout(() => {
      let headers = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": `${this.token}`
      });
      // headers.set("x-access-token", `${this.token}`);
      // headers.set("Access-Control-Allow-Origin", "*");
      console.log(this.phonenumber);

      let urll = `https://test.smartroutes.ie/api/routes-mobile/${
        this.phonenumber
      }`;
      this.http
        .get(urll, { headers: headers })
        .map(res => this.obj = res)
        .subscribe((data: any) => {
          this.storage.set("phonenumber", this.phonenumber);
          console.log(this.obj, "datadatadatadatadatadata");

          this.navCtrl.push(MainPage, { data: this.obj });
        });
    }, 1000);
  }
}

// headers: new HttpHeaders({
//   "x-access-token": `${this.token}`,
//   'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
// })
