import { Component, inject, NgZone } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLink],
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="horizontal-split">Horizontal Split</a>
        </li>
        <li>
          <a routerLink="mfe-card">Mfe - Card </a>
        </li>
        <li>
          <a routerLink="mfe-header">Mfe - Header</a>
        </li>
        <li>
          <a routerLink="mfe-footer">Mfe - Footer</a>
        </li>
      </ul>
    </nav>
   <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'shell';

  constructor() {
    (globalThis as any).ngZone = inject(NgZone);
  }
}
