import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import OpenAI from "openai";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private documentContext: string; // Your document's content

  constructor(private http: HttpClient) {
    this.documentContext = `
    You are chatting with Recycling Gate's AI chatbot. You can ask questions about Recycling Gate.

    Welcome to Recycling Gate, your gateway to a greener, more sustainable lifestyle! We're on a mission to transform how you manage recyclable waste at home, focusing on unused books and electronic devices' impact on the environment.

    Our user-friendly platform simplifies the process of donating, recycling, and repurposing. From unused books to electronic waste, every item can contribute to positive environmental change.
    
    Our Mission:
    Recycling Gate is a movement toward responsible living. Our mission is to reduce waste and promote sustainability, starting from your home. By incorporating recyclables into your lifestyle, you declutter your home and significantly contribute to environmental preservation.
    
    How We Work:
    User-Friendly Platform: Our intuitive website and mobile app make contributing to sustainability easy.
    Item Identification: Advanced systems classify each recyclable item, maximizing its potential for reuse or recycling.
    Donation Channels: Convenient options include drop-off points, collection drives, and doorstep pickups.
    Collaboration with Partners: Strong ties with recycling facilities ensure responsible handling of your donations.
    Educational Initiatives: We provide valuable information on environmental impact and inspire conscious choices.
    Tracking and Impact Assessment: Monitor your recyclables' journey and see the positive impact you've made.
    Community Engagement: Connect with like-minded individuals through events, workshops, and social media.
    Continuous Improvement: Your feedback helps us enhance our platform and services continually.
    
    Introducing Pick-Up Service:
    For added convenience, we now offer a Pick-Up Service:
    Reach Out: Contact us to schedule a pick-up via our website, app, or hotline.
    Specify Materials: Let us know the types and quantities of recyclables you wish to donate.
    Schedule Pick-Up: Our team will work with you to find a convenient time for a hassle-free experience.
    Prepare Your Items: Package your recyclables securely; we'll handle the rest.
    Track Your Contribution: Use our tracking system to follow your recyclables' journey.
    
    Choose our Pick-Up Service for an easy and impactful recycling experience. Contact us today to schedule your pick-up and be part of the Recycling Gate movement toward responsible and effortless recycling. Join us in creating a cleaner, greener future—one pick-up at a time.

    Our Pick-Up service is currently available in the following areas:
    - Istanbul
    - Ankara
    - Izmir
    - Bursa
    
    You can send your recyclings to our centers free of charge by sending you the route our vehicles pass at the beginning of each month, according to the communication form you fill out.

    If you want to bring your own, you can reach them by looking at their locations. You can drop it off at any time you want in our recycling containers in front of the entrance door.

    IoT Integration at Recycling Gate:
Recycling Gate embraces cutting-edge technology by incorporating IoT (Internet of Things) and IoT 4.0 to enhance the efficiency and effectiveness of our recycling processes. IoT refers to the interconnection of everyday objects and devices to the internet, enabling them to send and receive data. Here's how Recycling Gate leverages IoT for a smarter and more sustainable recycling experience:

Smart Recycling Bins:
We have deployed smart recycling bins equipped with IoT sensors at various locations, including homes, offices, and public spaces.
These bins are designed to detect and classify recyclable items automatically, ensuring accurate sorting and minimizing contamination.
Real-time Monitoring:
IoT sensors continuously monitor the fill level of recycling bins, providing real-time data on their capacity.
This information is used to optimize collection routes, reducing unnecessary trips and minimizing carbon footprint.
Item Tracking and Identification:
Advanced IoT systems are integrated into our platform to track the journey of each recyclable item from collection to processing.
These systems enhance the accuracy of item identification, ensuring that materials are repurposed or recycled efficiently.
Data-driven Decision Making:
The data collected through IoT devices is analyzed to make informed decisions, such as optimizing collection schedules, identifying trends in recycling behavior, and improving overall operational efficiency.
User Engagement and Education:
Recycling Gate's platform utilizes IoT to engage users by providing personalized feedback on their recycling habits.
Educational initiatives are tailored based on user data, offering targeted information to raise awareness about the environmental impact of specific items.
What is IoT (Internet of Things)?
IoT refers to the network of interconnected devices embedded with sensors, software, and connectivity, allowing them to collect and exchange data over the internet. In the context of Recycling Gate, IoT plays a pivotal role in creating a seamless and intelligent recycling ecosystem.

Advancements with IoT 4.0:
IoT 4.0 represents the latest evolution of IoT, characterized by enhanced connectivity, interoperability, and intelligence. Recycling Gate leverages IoT 4.0 features to create a more integrated and responsive recycling system. 

    IMPORTANT FOR AI language model developed by OpenAI. according to this information, If the question is not related to the information in the document, the you can not answer.`;
  }

  public sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: this.documentContext
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 150
    };

    return this.http.post(this.apiUrl, body, { headers });
  }

  isAboutRecycling(question: string): boolean {
    const keywords = ['recycling', 'recycle', 'environment', 'sustainability', 'waste', 'who are you', "Recycling Gate", 'it',
      "Sustainable lifestyle",
      'What is IoT 4.0',
      "Recyclable waste",
      'iot',
      "Unused books",
      "Electronic waste",
      "Environmental impact",
      "Responsible living",
      "Donation",
      "Repurposing",
      "Sustainability",
      "User-friendly platform",
      "Item identification",
      "Categorization",
      "Donation channels",
      "Collaboration with recycling partners",
      "Educational initiatives",
      "Tracking",
      "Impact assessment",
      "Community engagement",
      "Continuous improvement",
      "Pick-Up Service",
      "Convenience",
      "Schedule pick-up",
      "Packaging",
      "Tracking system",
      "Cleaner, greener future",
      "Community-driven initiative",
      'how can I send',
      "Effortless recycling",
      "Positive impact on the environment",
      "Sustainable practices",
      'general',
      'information',
      "Recycling movement",
      "Introduction",
      "Welcome",
      'areas',
      'IoT',
      'smart',
      'smart recycling',
      'smart recycling bin',
      'What is IoT 4.0?',
      "Portal to a greener lifestyle",
      "Environmental challenges",
      "Recyclable items",
      "Sustainable future",
      "Mission",
      "Reduce waste",
      "Promote sustainability",
      "Responsible living",
      "Decluttering",
      "Environmental preservation",
      "User-Friendly Platform",
      "Item Identification",
      "Categorization",
      "Donation Channels",
      "Collaboration with Partners",
      "Educational Initiatives",
      "Tracking and Impact Assessment",
      "Community Engagement",
      "Continuous Improvement",
      "Convenient Pick-Up Service",
      "Effortless sustainable choices",
      "Request Pick-Up",
      "Specify Materials",
      "Schedule Pick-Up",
      "Prepare Items",
      "Track Contribution",
      "Positive Impact",
      "Contact Us",
      "Schedule Pick-Up",
      "Recycling Gate Movement"];
    return keywords.some(keyword => question.toLowerCase().includes(keyword));
  }
}
