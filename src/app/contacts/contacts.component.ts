import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { FirebaseListObservable } from 'angularfire2';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'user-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
    private contactService: ContactService;
    private contacts: FirebaseListObservable<Contact[]>;

    constructor(contactService: ContactService) {
        this.contactService = contactService;
    }

    getContactsAsync(): FirebaseListObservable<Contact[]> {
        return this.contactService.getContactsAsync();
    }

    ngOnInit(): void {
        this.contacts = this.getContactsAsync();
    }
}