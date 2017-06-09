import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import DataOpsService from './services/dataOps.service';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import NewUserModalComponent from './components/newUserModal/newUserModal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataOpsService]
})
export default class AppComponent {
    messages: FirebaseListObservable<any[]>;
    rooms: FirebaseListObservable<any[]>;
    currentRoom: { roomName: string, roomKey: string };
    currentUser: string;

    dialogConfig: MdDialogConfig = {
        disableClose: true,
    }

    constructor( private dataOpsService: DataOpsService,
                 public mddialog: MdDialog)  {
        this.getUser();
        this.currentRoom = { roomName: 'xxx', roomKey: '-KkqHJ9n_1a1XjGJxAYh'}
        dataOpsService.getMessages(this.currentRoom.roomKey);
    }

    getUser() {
        let dialogRef = this.mddialog.open(NewUserModalComponent, this.dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            this.currentUser = result;
        });

    }
}
