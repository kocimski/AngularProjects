import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../course.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  nav: number = 0;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private locatioin: Location
  ) {}

  selectedCourses() {
    this.nav = 0;
  }
  selectedAdd() {
    this.nav = 1;
  }
  selectedSearch() {
    this.nav = 2;
  }

  selectedLogin() {
    this.nav = 3;
  }
  selectedRegistration() {
    this.nav = 4;
  }

  ngOnInit() {}
}
