import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { RouteTabsPage } from './routetabs';

@NgModule({
  declarations: [
    RouteTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(RouteTabsPage),
    TranslateModule.forChild()
  ],
  exports: [
    RouteTabsPage
  ]
})
export class RouteTabsPageModule { }
