import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { RateComponent } from "./rate/rate.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { NavComponent } from "./nav/nav.component";
import { SearchComponent } from "./search/search.component";
import { Ng5SliderModule } from "ng5-slider";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesComponent,
    CourseDetailComponent,
    RateComponent,
    AddCourseComponent,
    NavComponent,
    SearchComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
