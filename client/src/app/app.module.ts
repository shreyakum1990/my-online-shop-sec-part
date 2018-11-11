import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';


import { RestService } from './services/rest.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path : '',component : LoginComponent
      },
      {
        path : 'register',component : RegisterComponent
      },
      {
        path : 'home',component : HomeComponent
      }
    ])
  ],
  providers: [RestService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
