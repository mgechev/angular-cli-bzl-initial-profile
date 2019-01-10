import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bzl';
}

window.onbeforeunload = function() {
  localStorage.setItem('timer', Date.now().toString());  
};

const item = parseInt(localStorage.getItem('timer') || '0');
console.log(Date.now() - item);
