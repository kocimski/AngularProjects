import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"]
})
export class AddCourseComponent implements OnInit {
  acts: string[] = [
    "Audit. classes",
    "Lab. classes",
    "Project classes",
    "Conv. seminar",
    "Seminar classes",
    "Pract. classes",
    "Others",
    "E-learning"
  ];
  myform: FormGroup;
  subject: FormControl;
  ects: FormControl;
  term: FormControl;
  maxStudents: FormControl;
  activities: FormControl;
  description: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.subject = new FormControl("", Validators.required);
    this.ects = new FormControl("", Validators.required);
    this.term = new FormControl("", Validators.required);
    this.maxStudents = new FormControl("", Validators.required);
    this.description = new FormControl("", [
      Validators.required,
      Validators.minLength(30)
    ]);
    this.activities = new FormControl("");
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        subject: this.subject,
        ects: this.ects
      }),
      term: this.term,
      maxStudents: this.maxStudents,
      activities: this.activities,
      description: this.description
    });
  }
}
