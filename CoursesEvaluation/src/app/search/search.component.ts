import { Component, OnInit } from "@angular/core";

import { Options } from "ng5-slider";
import { Course } from "../course";
import { CourseService } from "../course.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  courses: Course[];
  minEcts: number = 5;
  maxEcts: number = 10;

  ectsOptions: Options = {
    floor: 0,
    ceil: 30
  };

  minRate: number = 2;
  maxRate: number = 4;
  rateOptions: Options = {
    floor: 0,
    ceil: 5
  };

  minTerm: number = 2;
  maxTerm: number = 4;
  termOptions: Options = {
    floor: 0,
    ceil: 10
  };

  ngOnInit() {
    //   this.getCourses();
  }

  // getCourses(): void {
  //   this.courseService
  //     .getCourses()
  //     .subscribe(courses => (this.courses = courses));
  // }
  // name: string;
  // filter() {this.courses.filter()

  // }
}
