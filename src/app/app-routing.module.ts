import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutSkillsComponent } from './about-skills/about-skills.component';
import { AboutCoursesComponent } from './about-courses/about-courses.component';
import { AboutEduComponent } from './about-edu/about-edu.component';


const routes: Routes = [
  {path: 'about-courses', component:AboutCoursesComponent},
  {path: 'about-edu', component:AboutEduComponent},
  {path: 'about-skills', component: AboutSkillsComponent},
  {path: 'projects', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//This array constant can be used to reference all routing components
//without the need to import each one seperately again in app.modules
export const routingComponents = [AboutSkillsComponent, AboutCoursesComponent, AboutEduComponent, ProjectsComponent]
