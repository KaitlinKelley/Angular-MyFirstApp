import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//the line below is where we tell typescript where to find the server component
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessMessageComponent } from './success-message/success-message.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  //this is where we register components, so Angular recognizes them
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
