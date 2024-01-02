import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { ChatBotComponent } from './pages/chat-bot/chat-bot.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ObjectDetectionComponent } from './components/object-detection/object-detection.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'chat', component: ChatBotComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'detection', component: ObjectDetectionComponent},
  {path: '**', component: HomeComponent, redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
