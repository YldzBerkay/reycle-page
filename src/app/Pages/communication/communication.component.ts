import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent {

  submittedSuccess = false;
  submittedFailure = false;

  constructor() { }

  public sendEmail(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
  
    emailjs.sendForm('service_don1hkb', 'template_cuanh85', form, '2uNdydOHG5YjFDRwq')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);

        this.submittedSuccess = true;
        form.reset();
        setTimeout(() => {
          this.submittedSuccess = false;
        }, 3000);
      }, (error) => {
        this.submittedFailure = true;
        console.log(error.text);
        form.reset();
        setTimeout(() => {
          this.submittedFailure = false;
        }, 3000);
      });
  }

  
  
}
