import { Component, Input } from '@angular/core';
import { Review, ReviewSources } from '../reviews.service';
import * as moment from 'moment'

@Component({
  selector: 'romw-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review: Review

  constructor() { }

  formatDate (date: string): string {
    return moment(date).format('MMM D, YYYY')
  }

  range(reviewRating: string): string[] {
    const rating = parseInt(reviewRating)
    return new Array(rating)
  }
  
  remainderRange(reviewRating: string): string[] {
    const rating = parseInt(reviewRating)
    return new Array(5 - rating)
  }

  imgPath (type: ReviewSources): string {
    switch (type) {
      case ReviewSources.GOOGLE:
        return "https://reviewsonmywebsite.com/images/source-logos/google_sm.png"
      case ReviewSources.FACEBOOK:
        return "https://reviewsonmywebsite.com/images/source-logos/facebook_sm.png"
      case ReviewSources.YELP:
        return "https://reviewsonmywebsite.com/images/source-logos/yelp_sm.png"
    }
  }
}
