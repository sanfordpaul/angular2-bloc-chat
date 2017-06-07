
import {Component} from '@angular/core';
import {MdInputModule, MdDialogConfig, MdDialogRef} from '@angular/material';
import DataOpsService from '../../services/dataOps.service';

@Component({
    selector: 'newRoomModal',
    templateUrl: 'newRoomModal.html',
    providers: [DataOpsService]
})
export default class NewRoomModalComponent {
    newRoomName: string;

    constructor(public dialogRef: MdDialogRef<NewRoomModalComponent>,
                private dataOpsService: DataOpsService) {
       }

    submit(){
         console.log("in submit(), newRoomName = ", this.newRoomName)
         this.dataOpsService.addRoom(this.newRoomName);
    }
}
