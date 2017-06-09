import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import  AppComponent  from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';

import { CookieModule } from 'ngx-cookie';

import MessagesComponent from "./components/messages/messages.component";
import NewRoomModalComponent from "./components/newRoomModal/newRoomModal.component";
import RoomsComponent from "./components/rooms/rooms.component";
import TitleBarComponent from "./components/titleBar/titleBar";
import UserSigninComponent from "./components/userSignin/userSignin";
import NewUserModalComponent from "./components/newUserModal/newUserModal.component"


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase, 'Bloc-Chat'), // imports firebase/app needed for everything
      AngularFireDatabaseModule, // imports firebase/database, only needed for database features
      AngularFireAuthModule, // imports firebase/auth, only needed for auth features

      MaterialModule,
      FlexLayoutModule,

      CookieModule.forRoot(),

    ],
  declarations: [ AppComponent,
                  MessagesComponent,
                  NewRoomModalComponent,
                  NewUserModalComponent,
                  RoomsComponent,
                  TitleBarComponent,
                  UserSigninComponent ],

  bootstrap: [ AppComponent ],

  entryComponents : [NewRoomModalComponent, NewUserModalComponent]


})
export class AppModule {}
