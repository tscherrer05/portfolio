import { Component, inject } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
        <!-- Text Content -->
        <div>
          <h2 class="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
          <div class="prose prose-lg text-slate-600">
            <p class="mb-4">
              I am a <strong>Senior Software Engineer and Technical Lead</strong> based in Lyon, France. 
              My expertise lies in designing scalable software solutions, specifically within the Java/Spring Boot and .NET ecosystems.
            </p>
            <p class="mb-4">
              Currently, I lead the Sport team at <strong>Decathlon Digital</strong>, where I oversee systems managing billions of API calls annually. 
              I specialize in high-traffic architectures, Kafka event-driven systems, and distributed system reliability.
            </p>
            <p class="mb-4">
              Beyond coding, I am passionate about <strong>mentoring</strong> junior developers, promoting Agile methodologies, and fostering a culture of engineering excellence through TDD and clean architecture.
            </p>
            <p class="mb-4">
              I am also fluent in <strong>English (C2)</strong>, allowing me to collaborate effectively in international environments.
            </p>
            <p>
              On a personal note, I also enjoy reading good books (my favorite author is C.S. Lewis) and practicing martial arts, specifically boxing.
            </p>
          </div>
          
          <div class="mt-8">
            <a [href]="'https://' + data.profile().socials.linkedin" target="_blank" class="text-blue-600 font-medium hover:underline flex items-center gap-2">
              <span>View LinkedIn Profile</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>

        <!-- Skills Grid -->
        <div id="skills" class="mt-12 lg:mt-0 bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Technical Proficiency
          </h3>
          
          <div class="space-y-6">
            @for (category of data.skills(); track category.category) {
              <div>
                <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">{{ category.category }}</h4>
                <div class="flex flex-wrap gap-2">
                  @for (skill of category.items; track skill) {
                    <span class="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 shadow-sm">
                      {{ skill }}
                    </span>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
  data = inject(PortfolioService);
}