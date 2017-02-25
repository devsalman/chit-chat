import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Message } from './message';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'chat-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
    private messageService: MessageService;
    private messages: FirebaseListObservable<Message[]>;
    @ViewChild('chatbox') private chatbox: ElementRef;

    constructor(messageService: MessageService) {
        this.messageService = messageService;
    }

    getMessagesAsync(): FirebaseListObservable<Message[]> {
        return this.messageService.getMessagesAsync();
    }

    ngOnInit(): void {
        this.messages = this.getMessagesAsync();
    }
    
    send(content: string): void {
        this.messages.push({
            timestamp: new Date().getTime(),
            from: {id: 0, name: "Salman El Farisi"},
            to: {id: 1, name: "Khoirul Annas"},
            content: content
        }).then(key => console.log("message id: " + key));
    }
}