import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from 'src/app/services/chat-service.service';
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
  userInput: string = '';
  conversation: { sender: string, message: string }[] = []; // Array to store the conversation


  constructor(private chatbotService: ChatServiceService) {

  }

  ngOnInit(): void {

  }


  sendMessage(): void {
    console.log(this.userInput);
    
    if (this.chatbotService.isAboutRecycling(this.userInput)) {
      this.conversation.push({ sender: 'You', message: this.userInput });
      this.chatbotService.sendMessage(this.userInput).subscribe(response => {
        this.conversation.push({ sender: 'Bot', message: response.choices[0].message.content });

      });
    } else {
      this.conversation.push({ sender: 'You', message: this.userInput });
      this.conversation.push({ sender: 'Bot', message: "I can only provide information about Recycling Gate." });
    }
    this.userInput = '';
  }


}
