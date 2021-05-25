import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//the line below is where we tell typescript where to find the server component
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';

@NgModule({
  //this is where we register components, so Angular recognizes them
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
