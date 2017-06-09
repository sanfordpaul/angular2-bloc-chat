import {Component} from '@angular/core';
import {MdInputModule, MdDialogConfig, MdDialogRef} from '@angular/material';


@Component({
    selector: 'newUserModal',
    templateUrl: 'newUserModal.html',
    providers: []
})
export default class NewUserModalComponent {
    newUserName: string;

    constructor(public dialogRef: MdDialogRef<NewUserModalComponent>,
                ) {
       }

    
}
