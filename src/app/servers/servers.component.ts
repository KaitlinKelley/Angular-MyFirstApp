import { Component, OnInit } from '@angular/core';

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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

}
