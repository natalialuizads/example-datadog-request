import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
@Component({
  standalone: true,
  imports: [RouterModule, ExampleComponent],
  selector: 'app-root',
  template: '<app-example />',
})
export class AppComponent {
  title = 'footer';
}
