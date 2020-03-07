import { Input, Component, OnInit } from "@angular/core";
import { Course } from "../course";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../course.service";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  @Input() course: Course;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private locatioin: Location
  ) {}

  ngOnInit() {}
  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.courseService
      .getCourse(id)
      .subscribe(course => (this.course = course));
  }

  goBack() {
    this.locatioin.back();
  }
}
