import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Contact } from '../contacts/contact';

@Injectable()
export class ContactService {
    private af: AngularFire;
    constructor(af: AngularFire) {
        this.af = af;
    }

    getContactsAsync(): FirebaseListObservable<Contact[]> {
        return this.af.database.list('/contacts');
    }
}