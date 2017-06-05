import {Component} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {MdDialog, MdDialogRef} from '@angular/material';
import NewRoomModalComponent from '../newRoomModal/newRoomModal.component';
@Component({
  selector: 'rooms',
  templateUrl: 'rooms.html'
})
export default class RoomsComponent {
    rooms: FirebaseListObservable<any[]>;
    constructor(db: AngularFireDatabase, public dialog: MdDialog)  {
      this.rooms = db.list('/rooms');
    }
    addRoom() {
          let dialogRef = this.dialog.open(NewRoomModalComponent);
    }
}
