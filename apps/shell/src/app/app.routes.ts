import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: 'horizontal-split',
    loadComponent: () => import('./pages/horizontal-split.component').then(c => c.HorizontalSplitComponent)
  },
  {
    path: 'mfe-card',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './module-federation'
    })
      .then((c) => c.ExampleComponent)
      .catch((err) => {
        console.log('Error lazy loading', err);
      })
  },
  {
    path: 'mfe-header',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './module-federation'
    })
      .then((c) => c.ExampleComponent)
      .catch((err) => {
        console.log('Error lazy loading', err);
      })
  },
  {
    path: 'mfe-footer',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: './module-federation'
    })
      .then((c) => c.ExampleComponent)
      .catch((err) => {
        console.log('Error lazy loading', err);
      })
  },
  {
    path: '**',
    redirectTo: 'horizontal-split'
  }
];
