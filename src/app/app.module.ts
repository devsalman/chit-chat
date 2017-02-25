import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { AngularFireModule }  from 'angularfire2';

import { AppComponent }       from './app.component';
import { ContactsComponent }  from './contacts/contacts.component';
import { MessagesComponent }  from './messages/messages.component';
import { ContactService }     from './services/contact.service';
import { MessageService }     from './services/message.service';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBRtlHhl2JuxG3DJmp2iiP9_2noKUhpQ7c",
  authDomain: "chit-chat-10754.firebaseapp.com",
  databaseURL: "https://chit-chat-10754.firebaseio.com",
  storageBucket: "chit-chat-10754.appspot.com",
  messagingSenderId: "817998196382"
};

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  providers: [ContactService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
