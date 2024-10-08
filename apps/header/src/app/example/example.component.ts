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
    .mfe-header {
       display: block;
       border: 2px solid blue;
       padding: 2rem;
       margin-top: 2rem;
    }
   `]
})
export class ExampleComponent {
  httpClient = inject(HttpClient);

  sendLog() {
    (window as any)['DD_LOGS'].logger.debug('example debug mfe header');
  }

  executeError() {
  throw new Error('example error mfe header')
  }

  executeRequest() {
   this.httpClient
       .get('https://jsonplaceholder.typicode.com/todos/test')
       .subscribe((res) => console.log(res))
  }
}
