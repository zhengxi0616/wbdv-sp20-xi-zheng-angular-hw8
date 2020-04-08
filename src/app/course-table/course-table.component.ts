import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: CourseServiceClient) { }

  courses = []
  courseId = ''

  ngOnInit(): void {
    this.service.findAllCourses().then(courses => this.courses = courses );
    this.route.params.subscribe(params => { this.courseId = params.courseId; });
  }

}
