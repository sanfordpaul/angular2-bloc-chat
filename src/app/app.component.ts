import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import DataOpsService from './services/dataOps.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataOpsService]
})
export default class AppComponent {
    messages: FirebaseListObservable<any[]>;
    rooms: FirebaseListObservable<any[]>;
    currentRoom: string = '-KkqHJ9n_1a1XjGJxAYh';

    constructor( private dataOpsService: DataOpsService )  {
         dataOpsService.getMessages(this.currentRoom);
    }
}
