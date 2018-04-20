import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = /*{
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };*/

  {
            "id": 129,
            "ref_id": "flFoMGUJ",
            "route_id": "14",
            "arrival_time": "09:24",
            "departure_time": "09:29",
            "name": "The Good Food Store",
            "address": "2b Serpentine Court, Serpentine Avenue, Dublin 4",
            "lat": 53.330513,
            "lng": -6.225019,
            "duration": 5,
            "phone": "01 6674541",
            "completed": false,
            "completed_ts": null,
            "completed_lat": null,
            "completed_lng": null,
            "signature": null,
            "signature_ts": null,
            "signature_lat": null,
            "signature_lng": null
        };
  
  



  constructor() {
    let items = [
      /*

      {
        "name": "Burt Bear1",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bearasjjsaosdakodskodskosdaksodksdokdsosdkodskdsoksdappppppppppppppppppppppppppppppppp.",
        "location" : "this is a test"
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      },*/
        {
            "id": 126,
            "ref_id": "Start",
            "route_id": "14",
            "arrival_time": "00:00",
            "departure_time": "08:00",
            "name": "Depot",
            "address": "Ballyellis, Gorey, Co. Wexford",
            "lat": 52.7127,
            "lng": -6.45264,
            "duration": null,
            "phone": null,
            "completed": false,
            "completed_ts": null,
            "completed_lat": null,
            "completed_lng": null,
            "signature": null,
            "signature_ts": null,
            "signature_lat": null,
            "signature_lng": null
        },
        {
            "id": 129,
            "ref_id": "flFoMGUJ",
            "route_id": "14",
            "arrival_time": "09:24",
            "departure_time": "09:29",
            "name": "The Good Food Store",
            "address": "2b Serpentine Court, Serpentine Avenue, Dublin 4",
            "lat": 53.330513,
            "lng": -6.225019,
            "duration": 5,
            "phone": "01 6674541",
            "completed": false,
            "completed_ts": null,
            "completed_lat": null,
            "completed_lng": null,
            "signature": null,
            "signature_ts": null,
            "signature_lat": null,
            "signature_lng": null
        },
        {
            "id": 128,
            "ref_id": "WVdqoSL4",
            "route_id": "14",
            "arrival_time": "09:45",
            "departure_time": "09:50",
            "name": "Spar",
            "address": "1 The Crescent, Monkstown, Co. Dublin",
            "lat": 53.293968,
            "lng": -6.153706,
            "duration": 5,
            "phone": "01 2880090",
            "completed": false,
            "completed_ts": null,
            "completed_lat": null,
            "completed_lng": null,
            "signature": null,
            "signature_ts": null,
            "signature_lat": null,
            "signature_lng": null
        },
        {
            "id": 127,
            "ref_id": "Rsmz8vIP",
            "route_id": "14",
            "arrival_time": "12:16",
            "departure_time": "12:21",
            "name": "Spar",
            "address": "Main Street, Newmarket on Fergus, Co. Clare.",
            "lat": 52.760551,
            "lng": -8.894082,
            "duration": 5,
            "phone": "061 368010",
            "completed": true,
            "completed_ts": "2018-03-20T09:26:58.000Z",
            "completed_lat": null,
            "completed_lng": null,
            "signature": null,
            "signature_ts": null,
            "signature_lat": null,
            "signature_lng": null
        },
        {
            "id": 130,
            "ref_id": "RoaUtX2U",
            "route_id": "14",
            "arrival_time": "12:23",
            "departure_time": "12:28",
            "name": "EuroSpar",
            "address": "Ennis Road, Newmarket - on Fergus, Co. Clare",
            "lat": 52.762962,
            "lng": -8.898757,
            "duration": 5,
            "phone": "061 368036",
            "completed": false,
            "completed_ts": null,
            "completed_lat": null,
            "completed_lng": null,
            "signature": null,
            "signature_ts": null,
            "signature_lat": null,
            "signature_lng": null
        },
        {
            "id": 131,
            "ref_id": "HZBXLLqW",
            "route_id": "14",
            "arrival_time": "13:43",
            "departure_time": "13:48",
            "name": "SuperValu",
            "address": "Strand Street, Kanturk, Co. Cork",
            "lat": 52.176453,
            "lng": -8.905039,
            "duration": 5,
            "phone": "029 50069 / 087 2028669",
            "completed": false,
            "completed_ts": null,
            "completed_lat": null,
            "completed_lng": null,
            "signature": null,
            "signature_ts": null,
            "signature_lat": null,
            "signature_lng": null
        },
        {
            "id": 132,
            "ref_id": "CDeTFpUY",
            "route_id": "14",
            "arrival_time": "14:47",
            "departure_time": "14:52",
            "name": "The Bagel Bar Coffee Shop Mahon Point",
            "address": "Unit F3 Mahon Point Shopping Centre, Cork",
            "lat": 51.886078,
            "lng": -8.396008,
            "duration": 5,
            "phone": "0851108162",
            "completed": false,
            "completed_ts": null,
            "completed_lat": null,
            "completed_lng": null,
            "signature": null,
            "signature_ts": null,
            "signature_lat": null,
            "signature_lng": null
        },
        {
            "id": 133,
            "ref_id": "End",
            "route_id": "14",
            "arrival_time": "20:14",
            "departure_time": "00:00",
            "name": "Finish",
            "address": "GreaseTrap",
            "lat": 52.7127,
            "lng": -6.45264,
            "duration": null,
            "phone": null,
            "completed": false,
            "completed_ts": null,
            "completed_lat": null,
            "completed_lng": null,
            "signature": null,
            "signature_ts": null,
            "signature_lat": null,
            "signature_lng": null
        }
    ];
    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
