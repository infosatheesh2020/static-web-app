import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello, {{value}}</div>`,
})
export class AppComponent {
  value = 'Welcome to FTA Live Session!';
}
