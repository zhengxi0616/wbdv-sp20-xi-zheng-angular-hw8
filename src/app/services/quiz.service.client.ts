import {Injectable} from '@angular/core';

@Injectable()

export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://wbdv-sp20-xi-zheng-nodejs.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://wbdv-sp20-xi-zheng-nodejs.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}

