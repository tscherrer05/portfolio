import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';
import { LinkedinPostsComponent } from './components/linkedin-posts.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, LinkedinPostsComponent, ContactComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  currentYear = new Date().getFullYear();
}