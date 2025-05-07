import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-brand">
        <a routerLink="/">AWS Angular App</a>
      </div>
      <div class="navbar-menu">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #0066cc;
      color: white;
      padding: 1rem 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .navbar-brand a {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
    }
    .navbar-menu {
      display: flex;
      gap: 1.5rem;
    }
    .navbar-menu a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 0;
      position: relative;
    }
    .navbar-menu a:hover, .navbar-menu a.active {
      color: #f0f0f0;
    }
    .navbar-menu a.active:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: white;
    }
  `]
})
export class NavComponent {
  
}