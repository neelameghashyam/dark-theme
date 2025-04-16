import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YoutubeSidebarComponent } from './youtube-sidebar/youtube-sidebar.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { ContentComponent } from './pages/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StepperComponent } from './stepper/stepper.component';
export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
    { path: 'stepper', component: StepperComponent, title: 'Stepper' },

    { 
        path: 'youtube-dashboard',
        redirectTo: 'youtube-dashboard/dashboard',
        pathMatch: 'full'
      },
    { 
        path: 'youtube-dashboard',
        component: YoutubeSidebarComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
          { path: 'content', component: ContentComponent, title: 'Content' },
          { path: 'analytics', component: AnalyticsComponent, title: 'Analytics' },
          { path: 'comments', component: CommentsComponent, title: 'Comments' },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
      }
];
