import { Component, OnInit } from '@angular/core';
import {timestamp} from "rxjs/operators";

@Component({
  //class-style selector
  //selector: '.app-servers'

  //attribute-style selector
  // selector: '[app-servers]'

  //element-style selector
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string = "No server was created";
  serverName:string = "testServer";
  userName:string = "";
  serverCreated:boolean = false;
  servers = ["Testserver", "Testserver2"];
  buttonClicks = [];
  showSecretText = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is: " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername(){
    this.userName = "";
  }

  onBuzzButton(){
    let timestamp = Math.floor(Date.now()/1000);
    this.buttonClicks.push(timestamp);
  }


}
