import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { SearchComponent } from "./search/search.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [
  // { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "courses", component: CoursesComponent },
  { path: "add-course", component: AddCourseComponent },
  { path: "search", component: SearchComponent },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "detail/:id", component: CourseDetailComponent }
  // { path: "**", redirectTo: "/courses" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
