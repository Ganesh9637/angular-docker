import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <div class="container">
        <p>&copy; 2023 AWS Angular Application. Deployed with CloudFormation.</p>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    main {
      flex: 1;
      padding: 1rem 0;
    }
    footer {
      background-color: #f5f5f5;
      padding: 1rem 0;
      text-align: center;
      margin-top: auto;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  `]
})
export class AppComponent {
  title = 'AWS Angular App';
}