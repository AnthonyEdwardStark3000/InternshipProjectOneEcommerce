import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';

  openNav() {
    document.getElementById('mySidenav')?.setAttribute("style","width:200px");
 }

}
