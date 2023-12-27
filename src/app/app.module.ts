import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { FormsModule } from '@angular/forms';
import { ChatBotComponent } from './pages/chat-bot/chat-bot.component';
import { ChatServiceService } from './services/chat-service.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import { LocationsComponent } from './pages/locations/locations.component';
import { MapComponent } from './components/map/map.component';
import { environment } from 'src/environments/environment';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavigationComponent,
    AboutUsComponent,
    CommunicationComponent,
    ChatBotComponent,
    LocationsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgIf,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    GoogleMapsModule

  ],
  providers: [
    ChatServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
