import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'true';
  console(data: any) {
    console.log(data);
  }

  val = [1, 2, 3, 4];
}
