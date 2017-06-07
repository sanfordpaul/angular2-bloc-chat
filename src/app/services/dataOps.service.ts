import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export default class DataOpsService {
    rooms: FirebaseListObservable<any[]>;
    messages: FirebaseListObservable<any[]>;

    constructor(public database: AngularFireDatabase, ){

    }

    addRoom(newRoomName: string){
        this.rooms = this.database.list('/rooms');
        this.rooms.push({roomName: newRoomName});
    }

    getRooms() {
        this.rooms = this.database.list('/rooms');
        return this.rooms;
    }
    getMessages(currentRoom: string) {
        console.log('in getMessages, currentRoom = ', currentRoom)
        this.messages = this.database.list('/messages', {
            query: {
                orderByChild: 'roomObject/roomId',
                equalTo: currentRoom
            }
    });
        console.log('retrieved messages = ', this.messages)
        return this.messages;
    }
}
