import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h1>About Our Application</h1>
      <p>This is a demonstration of an Angular application deployed using AWS services.</p>
      
      <div class="tech-stack">
        <h2>Our Technology Stack</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> Angular 19 with standalone components
          </li>
          <li>
            <strong>Containerization:</strong> Docker with Nginx
          </li>
          <li>
            <strong>Cloud Infrastructure:</strong> AWS (ECS, ECR, ALB, CloudFormation)
          </li>
          <li>
            <strong>CI/CD:</strong> AWS CodePipeline, CodeBuild
          </li>
        </ul>
      </div>
      
      <div class="deployment">
        <h2>Deployment Architecture</h2>
        <p>Our application is containerized using Docker and deployed to Amazon ECS. 
        The infrastructure is defined using CloudFormation templates, ensuring consistent 
        and repeatable deployments. The CI/CD pipeline automatically builds and deploys 
        changes when code is pushed to the repository.</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1, h2 {
      color: #333;
    }
    h2 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    .tech-stack, .deployment {
      margin-top: 2rem;
      padding: 1.5rem;
      border-radius: 8px;
      background-color: #f5f5f5;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    ul {
      padding-left: 1.5rem;
    }
    li {
      margin-bottom: 0.5rem;
    }
  `]
})
export class AboutComponent {
  
}