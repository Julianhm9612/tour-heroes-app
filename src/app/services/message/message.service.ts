import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string[];

  constructor() {
    this.messages = [];
  }

  public add(message: string): void {
    this.messages.push(message);
  }

  public clear(): void {
    this.messages = [];
  }
}
