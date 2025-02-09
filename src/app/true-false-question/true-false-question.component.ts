import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question
  answer = null
  graded = false
  grade = () => {
    this.graded = true
  }
  ngOnInit(): void {
  }

}
