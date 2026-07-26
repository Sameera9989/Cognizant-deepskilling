import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { Profile } from './pages/profile/profile';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CourseList
  },
  {
    path: 'courses/:id',
    component: CourseDetail
  },
  {
    path: 'profile',
    component: Profile,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];