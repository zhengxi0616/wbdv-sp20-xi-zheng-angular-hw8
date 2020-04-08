import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { QuizzesComponent } from './quizzes/quizzes.component';


const routes: Routes = [
  {path: '', component: CourseTableComponent},
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'table/courses/:courseId', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/quizzes', component: QuizzesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
