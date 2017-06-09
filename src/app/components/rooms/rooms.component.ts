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
    roomKey: string;
    roomName: string;

    dialogConfig: MdDialogConfig = {
        disableClose: true,
    }

    constructor( public mddialog: MdDialog,
                 private dataOpsService: DataOpsService,
                 private appComponent: AppComponent)
    {
        this.rooms = dataOpsService.getRooms();
        appComponent.messages = dataOpsService.getMessages(appComponent.currentRoom.roomKey);
    }

    addRoom() {
        let dialogRef = this.mddialog.open(NewRoomModalComponent, this.dialogConfig);

    }

    roomClicked(event : Event){
        let target = <HTMLElement> event.target;
        this.roomKey = target.parentElement.getAttribute('roomKey');
        this.roomName = target.parentElement.getAttribute('roomName');
        this.appComponent.currentRoom = {roomName: this.roomName, roomKey: this.roomKey};
        this.appComponent.messages = this.dataOpsService.getMessages(this.appComponent.currentRoom.roomKey);

    }
}
