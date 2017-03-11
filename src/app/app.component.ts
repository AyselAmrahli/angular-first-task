import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class=container>
	<h1>{{title}}</h1>
	<app-car-parts></app-car-parts>
</div>
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title: string ="CAR PARTS";		

}