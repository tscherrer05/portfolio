import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { SkillsGraphComponent } from './skills-graph.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SkillsGraphComponent],
  template: `
    <section class="relative min-h-[600px] lg:h-[80vh] bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden flex items-center">
      
      <div class="absolute inset-0 z-0 opacity-20 lg:opacity-100">
         <div class="absolute right-0 top-0 w-full lg:w-1/2 h-full">
            <app-skills-graph />
         </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-none">
        <div class="lg:w-1/2 pointer-events-auto">
          
          <div class="mb-8">
            <div class="relative inline-block">
              <div class="absolute inset-0 bg-blue-600 rounded-full blur opacity-20 transform translate-y-2"></div>
              
              @if (!showInitials()) {
                <img 
                  [src]="currentImageSrc()" 
                  (error)="handleImageError()"
                  alt="Timothée Scherrer" 
                  class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl object-cover bg-white"
                />
              } @else {
                <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl bg-slate-100 flex items-center justify-center text-slate-400">
                  <span class="text-4xl font-bold tracking-widest">TS</span>
                </div>
              }
            </div>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Designing resilient <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Distributed Systems</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Hi, I'm <strong>{{ data.profile().name }}</strong>. I build high-traffic, event-driven architectures and lead engineering teams to success.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#projects" class="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5">
              View My Work
            </a>
            <a href="#contact" class="inline-flex justify-center items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all">
              Contact Me
            </a>
          </div>

          <div class="mt-10 flex items-center gap-6 text-slate-500">
            <div class="flex items-center gap-2">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
               <span>Lyon, France</span>
            </div>
             <div class="flex items-center gap-2">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               <span>9+ Years Exp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  data = inject(PortfolioService);
  
  // Primary image source
  currentImageSrc = signal("/me.jpg");
  showInitials = signal(false);

  handleImageError() {
    // If me.jpg fails, try the GitHub profile image as a reliable fallback
    if (this.currentImageSrc() === "me.jpg") {
      this.currentImageSrc.set("https://github.com/tscherrer05.png");
    } else {
      // If even GitHub fails, show initials
      this.showInitials.set(true);
    }
  }
}