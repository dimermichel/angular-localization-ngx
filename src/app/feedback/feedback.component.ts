import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  customerFeedback = new Feedback();

  constructor() { }

  ngOnInit(): void {
  }

  saveFeedback() {
    alert('Thanks for your valuable feedback!!!\nThe feedback has been submitted successfully.');
    console.table(this.customerFeedback);
  }

}
