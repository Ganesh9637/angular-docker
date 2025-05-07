import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render about heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('About Our Application');
  });

  it('should render tech stack section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const techStack = compiled.querySelector('.tech-stack');
    expect(techStack).toBeTruthy();
  });

  it('should render deployment section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const deployment = compiled.querySelector('.deployment');
    expect(deployment).toBeTruthy();
  });
});