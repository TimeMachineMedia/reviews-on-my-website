import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReviewsService, Review } from '../reviews.service';

@Component({
  selector: 'romw-reviews',
  templateUrl: './reviews.component.html',
  styles: [
  ]
})
export class ReviewsComponent implements OnInit {
  @Input() token: string

  reviews: BehaviorSubject<Review[]> = new BehaviorSubject([])

  constructor(private reviewService: ReviewsService) { }

  ngOnInit(): void {
    this.reviewService.fetchReviews(this.token).then(reviews => {
      this.reviews.next(reviews)
    })
  }

}
