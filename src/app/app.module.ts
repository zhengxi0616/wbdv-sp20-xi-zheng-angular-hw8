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
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { QuizServiceClient } from './services/quiz.service.client';
import { QuestionServiceClient } from './services/question.service.client';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CourseServiceClient, LessonServiceClient, ModuleServiceClient, QuizServiceClient, QuestionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
