import { Component } from '@angular/core';

//component decorator with @
@Component({
  //the selector is the "html tag" by which we will later refer to this component
  selector: 'app-server',
  templateUrl: './server.component.html'
})
//"export" allows us access to this info outside of this file
export class ServerComponent {

}
