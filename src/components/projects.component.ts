import { Component, inject } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-slate-900">Featured Projects & Achievements</h2>
        <p class="mt-4 text-slate-600 max-w-2xl mx-auto">
          A collection of architectural challenges, system optimizations, and software solutions I have designed and delivered.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        @for (project of data.projects(); track project.title) {
          <div class="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
            
            <div class="p-6 flex-grow">
              <div class="flex justify-between items-start mb-4">
                <span [class]="getBadgeClass(project.type)">
                  {{ project.type }}
                </span>
                <span class="text-xs font-mono text-slate-400">{{ project.date }}</span>
              </div>
              
              <h3 class="text-xl font-bold text-slate-900 mb-2">{{ project.title }}</h3>
              <div class="text-sm font-medium text-blue-600 mb-4">{{ project.subtitle }}</div>
              
              <p class="text-slate-600 text-sm mb-4 leading-relaxed">
                {{ project.description }}
              </p>

              <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mb-4">
                 <p class="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1">Impact</p>
                 <p class="text-sm text-blue-800">{{ project.impact }}</p>
              </div>
            </div>

            <div class="bg-slate-50 px-6 py-4 border-t border-slate-100">
               <div class="flex flex-wrap gap-2">
                 @for (tag of project.tags; track tag) {
                   <span class="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2 py-1 rounded-md">
                     #{{ tag }}
                   </span>
                 }
               </div>
            </div>

          </div>
        }
      </div>
      
      <div class="mt-16 text-center">
        <a [href]="data.profile().socials.github" target="_blank" class="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
          Check out more on GitHub
        </a>
      </div>
    </div>
  `
})
export class ProjectsComponent {
  data = inject(PortfolioService);

  getBadgeClass(type: string): string {
    const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide ";
    switch (type) {
      case 'architecture': return base + "bg-purple-100 text-purple-800";
      case 'dev': return base + "bg-green-100 text-green-800";
      case 'saas': return base + "bg-amber-100 text-amber-800";
      case 'talk': return base + "bg-pink-100 text-pink-800";
      default: return base + "bg-slate-100 text-slate-800";
    }
  }
}