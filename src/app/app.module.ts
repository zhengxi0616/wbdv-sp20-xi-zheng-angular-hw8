import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseServiceClient } from './services/CourseServiceClient';
import { LessonServiceClient} from './services/LessonServiceClient';
import { ModuleServiceClient} from './services/ModuleServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CourseServiceClient, LessonServiceClient, ModuleServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
