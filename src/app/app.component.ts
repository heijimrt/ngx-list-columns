import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    {
      values: [
        { label: 'Maria', value: 'maria' },
        { label: '27', value: 27 },
        { label: 'Female', value: 'female' }
      ]
    },
    {
      values: [
        { label: 'angular', value: 1 },
        { label: 'nodejs', value: 2 },
        { label: 'react', value: 3 },
        { label: 'vue', value: 4 }
      ]
    },
    {
      values: [
        { label: 1404, value: 1404 },
        { label: 'John', value: 'John' },
        { label: 'Director', value: 'director' }
      ]
    },
  ];
}
