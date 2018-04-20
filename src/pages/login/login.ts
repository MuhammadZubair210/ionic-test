import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { PhonenumberPage } from "../phonenumber/phonenumber";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: "demo@smartroutes.ie",
    password: "password"
  };
//demo@smartroutes.ie
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public storage: Storage,
    public http: HttpClient,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
 
    let that = this;
    this.storage.ready().then(() => {
      this.storage.get('isLoggedIn').then((val) => {
         if(val == true){
            // this.navCtrl.push(MainPage);
            // this.navCtrl.push(PhonenumberPage);
         }
         console.log('Isloggedin is', val);
      });
    });


  }


/*loginAccount(account: Account): Observable<string> {        
    var obj = { UserName: account.Email, Password: account.Password, grant_type: 'password' };

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

        let body = this.serializeObj(obj);

         return this._http.post('https://localhost:44305/Token',  body, options)
                             .map(this.extractData)
                             .catch(this.handleError);
}
*/

private serializeObj(obj) {
    var result = [];
    for (var property in obj)
        result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
}

  // Attempt to login in through our User service
  doLogin() {

  let body = this.serializeObj(this.account);
  let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
 
   let urll = 'https://test.smartroutes.ie/api/authenticate';
   this.http.post(urll, body, {headers: headers}).subscribe( (data: any) => {
      console.log(data);  
      this.storage.set("token",data.token)
      if(data.user.username == this.account.username){
        // this.navCtrl.push(MainPage);
        this.navCtrl.push("PhonenumberPage");        
        this.storage.set('isLoggedIn', true);
        // Unable to log in
        let toast = this.toastCtrl.create({
          message: "Welcome "+ data.user.name,
          duration: 3000,
          position: 'top'
        });
        toast.present();

        let toasta = this.toastCtrl.create({
          message: "Your token is "+ data.token,
          duration: 5000,
          position: 'top'
        });

        setTimeout(() => {
          toasta.present();
        }, 1500);

      }else{
        alert(data._body);
      }
   });

    /*this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/
  }
}