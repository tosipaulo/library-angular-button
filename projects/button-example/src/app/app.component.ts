import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'button-example';
  isLoad = false;
  setLoad() {
    this.isLoad = !this.isLoad;
    console.log(this.isLoad)
  }
}
