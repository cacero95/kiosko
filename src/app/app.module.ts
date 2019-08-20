import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePipe } from './pages/home.pipe';
import { RegistrarComponent } from './components/registrar/registrar.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
export const firebaseConfig = {
  
  apiKey: "AIzaSyAW9Hl5WNAEOuJ5ZIhNkdoeBagS8FF_80M",
  authDomain: "gag-98456.firebaseapp.com",
  databaseURL: "https://gag-98456.firebaseio.com",
  projectId: "gag-98456",
  storageBucket: "gag-98456.appspot.com",
  messagingSenderId: "367526898424",
  appId: "1:367526898424:web:c2b7604dd6509c5c"

};

@NgModule({
  declarations: [AppComponent, HomePipe, RegistrarComponent],
  entryComponents: [RegistrarComponent],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
