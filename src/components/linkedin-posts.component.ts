import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { SafePipe } from '../pipes/safe.pipe';

@Component({
  selector: 'app-linkedin-posts',
  standalone: true,
  imports: [SafePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-slate-900">Popular LinkedIn Posts</h2>
        <p class="mt-4 text-slate-600 max-w-2xl mx-auto">
          Sharing knowledge, technical insights, and engaging with the developer community.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
         @for (post of data.linkedInPosts(); track post.url) {
           <div class="w-full flex justify-center bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 p-1">
             <iframe
               [src]="post.url | safe"
               [height]="post.height"
               [width]="post.width"
               frameborder="0"
               allowfullscreen=""
               title="Post intégré"
               loading="lazy"
               class="max-w-full rounded-lg"
               style="max-width: 100%;">
             </iframe>
           </div>
         }
      </div>
      
      <div class="mt-12 text-center">
        <a [href]="'https://' + data.profile().socials.linkedin" target="_blank" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
          <span>See more on LinkedIn</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  `
})
export class LinkedinPostsComponent {
  data = inject(PortfolioService);
}