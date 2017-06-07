import {Component, Input} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import AppComponent from 'app/app.component';
import DataOpsService from '../../services/dataOps.service';
import NewRoomModalComponent from '../newRoomModal/newRoomModal.component';


@Component({
  selector: 'rooms',
  templateUrl: 'rooms.html',
  providers: [DataOpsService]
})
export default class RoomsComponent {
    rooms: FirebaseListObservable<any[]>;
    newRoomName: string;

    roomId: string;

    dialogConfig: MdDialogConfig = {
        disableClose: true,
    }

    constructor( public dialog: MdDialog,
                 private dataOpsService: DataOpsService,
                 private appComponent: AppComponent)
    {
        this.rooms = dataOpsService.getRooms();
        appComponent.messages = dataOpsService.getMessages(appComponent.currentRoom);
    }

    addRoom() {
        let dialogRef = this.dialog.open(NewRoomModalComponent, this.dialogConfig);

    }

    roomClicked(event : Event){
        let target = <HTMLElement> event.target;
        this.roomId = target.parentElement.getAttribute('roomId');
        this.appComponent.currentRoom = this.roomId;
        console.log('currentRoom set to ', this.appComponent.currentRoom);
        this.appComponent.messages = this.dataOpsService.getMessages(this.appComponent.currentRoom);

    }
}
