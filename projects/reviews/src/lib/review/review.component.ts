import { Component, Input, OnInit } from '@angular/core';
import { Review, ReviewSources } from '../reviews.service';
import * as moment from 'moment'

@Component({
  selector: 'romw-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review
  initialLength: number = 120
  public showFullReview = true
  public needsTruncation = false
  public truncatedReview: string = ''

  constructor() { }

  ngOnInit(): void {
    const bagOfWords = this.review.reviewBody.split(' ')
    if(bagOfWords.length > this.initialLength) {
      this.truncatedReview = bagOfWords.slice(0, this.initialLength).join(' ')
      this.showFullReview = false
      this.needsTruncation = true
    } else {
      this.showFullReview = true
      this.needsTruncation = false
    }
  }

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
