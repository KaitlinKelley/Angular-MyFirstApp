import { Component } from '@angular/core';

//component decorator with @
@Component({
  //the selector is the "html tag" by which we will later refer to this component
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]

})
//"export" allows us access to this info outside of this file
export class ServerComponent {
  serverId:number = 10;
  serverStatus:string = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === "online" ? "green" : "red";
  }
}
