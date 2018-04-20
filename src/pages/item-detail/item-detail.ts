import { Items } from '../../providers/providers';
import { Geolocation } from '@ionic-native/geolocation';
import { ViewChild } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

import {
GoogleMaps,
GoogleMap,
GoogleMapsEvent,
GoogleMapOptions,
CameraPosition,
MarkerOptions,
Marker
} from '@ionic-native/google-maps';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {} from '@types/googlemaps';

@IonicPage()
@Component({
selector: 'page-item-detail',
templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 item: any;
 //@ViewChild('map_canvas') mapElement: ElementRef;
 mapElement:any;
 map: any;
 currentLat: any;
 currentLng: any;
 loader:any;
 
     

constructor(public navCtrl: NavController, navParams: NavParams, items: Items,private geolocation: Geolocation,
  private backgroundGeolocation: BackgroundGeolocation,public loadingCtrl: LoadingController) {
this.item = navParams.get('item') || items.defaultItem;
this.mapElement = document.getElementById('map_canvas');
debugger;
 }

ionViewDidLoad() {

  this.loader = this.loadingCtrl.create({
    content: "Please wait..."
  });  
this.mapElement = document.getElementById('map_canvas');
this.getCurrentLocation();
//setTimeout(this.loadSecondMap.bind(this), 3000);
this.loadMap(); 
//this.loadSecondMap();
//this.startNavigating();

const config: BackgroundGeolocationConfig = {
  desiredAccuracy: 10,
  stationaryRadius: 20,
  distanceFilter: 30,
  debug: true, //  enable this hear sounds for background-geolocation life-cycle.
  stopOnTerminate: false, // enable this to clear background location settings when the app terminates
};


this.backgroundGeolocation.configure(config)
  .subscribe((location: BackgroundGeolocationResponse) => {

    console.log(location);
    this.currentLat = location.latitude;
    this.currentLng = location.longitude;
    this.startNavigating();
    //location.latitude
    //alert("Changed Called");

    let distance = this.distanceInKmBetweenEarthCoordinates(this.currentLat,this.currentLng,this.item.lat,
    this.item.lng);
    let distanceInMeters = this.KMtoMeters(distance);
    //alert(distanceInMeters);
    if(distanceInMeters <= 50){
      //alert("In the Radius Move to Next Point Now");
      var names = [];
      names.push(this.item.name);
      localStorage.setItem("coveredPositions", JSON.stringify(names));

    }else{
      //alert("Not In the Radius");
    }  
    // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
    // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
    // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
    //this.backgroundGeolocation.finish(); // FOR IOS ONLY

  });
  this.backgroundGeolocation.start();
  //this.presentLoading();

}

presentLoading() {
  this.loader.present();
}


stopLoading(){
  this.loader.dismiss();
}


distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
  var earthRadiusKm = 6371;

  var dLat = this.degreesToRadians(lat2-lat1);
  var dLon = this.degreesToRadians(lon2-lon1);

  lat1 = this.degreesToRadians(lat1);
  lat2 = this.degreesToRadians(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return earthRadiusKm * c;
}

degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

 KMtoMeters(valNum) {
  return valNum*1000;
}



 loadSecondMap(){
    debugger;
        let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
 
        this.map = new google.maps.Map(this.mapElement, mapOptions);
        this.startNavigating();
    }

    showroute(){
      this.loadSecondMap();
    }


startNavigating(){
        this.presentLoading();
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
 
        directionsDisplay.setMap(this.map);
        directionsService.route({
            /*origin: {lat: 37.77, lng: -122.447},
            destination: {lat: 37.768, lng: -122.511},*/
            origin: {lat: this.currentLat, lng: this.currentLng},
            destination: {lat: this.item.lat, lng: this.item.lng},
            /*destination: {lat: this.currentLat, lng: this.currentLng},*/
            /*destination: {lat: 31.421455, lng: 74.283488},*/
            
            travelMode: google.maps.TravelMode['DRIVING']
         }, (res, status) => {
          debugger;
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
                this.stopLoading();
                //alert("status OK");
            } else {
                this.stopLoading();
                console.warn(status);
                alert(status);
                alert("status Fail");
            }
        });
    }

getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
    
         this.currentLat = resp.coords.latitude;
         this.currentLng = resp.coords.longitude;
         //this.startNavigating();

        //alert(resp.coords.latitude);
        //alert(resp.coords.longitude);
     // resp.coords.latitude
     // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});
}


loadMap() {

    //alert(this.currentLat);
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.item.lat,
          lng: this.item.lng
        },
        zoom: 16,
    bearing: 140,
    duration: 5000
      }
    };


    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
         
        // Now you can use all methods safely.
        this.map.addMarker({
            title: this.item.name,
            icon: 'Red',
            animation: 'DROP',
            position: {
              lat: this.item.lat,
              lng: this.item.lng
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                //alert('clicked');
              });
          });

      });
  }
 
}
