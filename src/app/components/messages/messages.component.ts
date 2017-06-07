import {Component} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import AppComponent from 'app/app.component';
import DataOpsService from '../../services/dataOps.service';


@Component({
  selector: 'messages',
  templateUrl: 'messages.html',
  providers: [DataOpsService]
})

export default class MessagesComponent {


    constructor( private dataOpsService: DataOpsService, public appComponent: AppComponent )  {
         appComponent.messages = dataOpsService.getMessages(appComponent.currentRoom);
    }

    newMessage(){
        console.log('in newMessage()');
    }
}
