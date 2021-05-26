import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //notice that styleUrls is an array, can link to multiple stylesheets
  // styleUrls: ['./app.component.css']

  //can use either styles for inline (also an array!), or use styleUrls to link to external file
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
}
