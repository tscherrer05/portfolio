import { Component, inject } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-slate-900">Professional Experience</h2>
        <p class="mt-4 text-slate-600">A timeline of my career journey and key roles.</p>
      </div>

      <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
        
        @for (job of data.experiences(); track job.company + job.period) {
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            <!-- Icon -->
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <!-- Card -->
            <div class="w-[calc(100%-4rem)] rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:w-[calc(50%-2.5rem)] hover:border-blue-300 transition-colors">
              <div class="flex items-center justify-between space-x-2 mb-1">
                <div class="font-bold text-slate-900">{{ job.role }}</div>
                <time class="font-mono text-xs text-slate-500">{{ job.period }}</time>
              </div>
              <div class="text-blue-600 font-medium text-sm mb-3">{{ job.company }} | {{ job.location }}</div>
              
              <ul class="mb-4 space-y-2 text-sm text-slate-600 list-disc list-outside ml-4">
                @for (desc of job.description; track desc) {
                  <li>{{ desc }}</li>
                }
              </ul>

              <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                @for (tech of job.tech; track tech) {
                  <span class="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{{ tech }}</span>
                }
              </div>
            </div>

          </div>
        }

      </div>
    </div>
  `
})
export class ExperienceComponent {
  data = inject(PortfolioService);
}