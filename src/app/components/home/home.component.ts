import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h1>Welcome to Our Angular Application</h1>
      <p>This application is deployed using AWS CloudFormation, ECS, and CodePipeline.</p>
      <div class="features">
        <div class="feature">
          <h3>CloudFormation Infrastructure</h3>
          <p>Our application runs on infrastructure defined as code using AWS CloudFormation.</p>
        </div>
        <div class="feature">
          <h3>Container Deployment</h3>
          <p>We use Docker containers deployed to Amazon ECS for scalable and reliable hosting.</p>
        </div>
        <div class="feature">
          <h3>CI/CD Pipeline</h3>
          <p>Continuous integration and deployment with AWS CodePipeline ensures rapid and reliable updates.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
    .features {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 2rem;
    }
    .feature {
      flex: 1;
      min-width: 300px;
      padding: 1.5rem;
      border-radius: 8px;
      background-color: #f5f5f5;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h3 {
      color: #0066cc;
      margin-bottom: 0.5rem;
    }
  `]
})
export class HomeComponent {
  
}