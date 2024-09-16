import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { datadogExampleLib } from '@angular-monorepo/logger';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './example.component.html',
  styles: [`
   .mfe-card {
      display: block;
      border: 2px solid pink;
      padding: 2rem;
      margin-top: 2rem;
   }
  `]
})
export class ExampleComponent {

  httpClient = inject(HttpClient);

  sendLog() {
    datadogExampleLib.logger.warn('example warn mfe card');
  }

  executeError() {
    throw new Error('example error mfe card');
  }

  executeRequest() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/test')
      .subscribe((res) => console.log(res));
  }
}
