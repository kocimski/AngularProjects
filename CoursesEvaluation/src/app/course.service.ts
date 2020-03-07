import { Injectable } from "@angular/core";
import { Course } from "./course";
import { COURSES } from "./mock-courses";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  constructor() {}

  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }

  getCourse(id: number): Observable<Course> {
    return of(COURSES.find(course => course.id === id));
  }
}
