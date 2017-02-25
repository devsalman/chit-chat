import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Message } from '../messages/message';

@Injectable()
export class MessageService {
    private af: AngularFire;
    constructor(af: AngularFire) {
        this.af = af;
    }

    getMessagesAsync(): FirebaseListObservable<Message[]> {
        return this.af.database.list('/messages');
    }
}