import { Component, OnInit, Input, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { ReviewsService, Review } from '../reviews.service';

@Component({
  selector: 'romw-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: [ './reviews.component.scss' ]
})
export class ReviewsComponent implements OnInit {
  @Input() token: string

  autoIncrement = true
  currentIndex = 0
  reviews: BehaviorSubject<Review[]> = new BehaviorSubject([])

  constructor(private reviewService: ReviewsService) { }

  setIndex (index: number) {
    this.currentIndex = index
  }

  isActive (index: number) {
    return this.currentIndex === index
  }

  @HostListener('mouseover')
  onEnter () {
    this.autoIncrement = false
  }
  
  @HostListener('mouseleave')
  onLeave () {
    this.autoIncrement = true
  }

  ngOnInit(): void {
    this.reviewService.fetchReviews(this.token).then(reviews => {
      this.reviews.next(reviews)
    })

    timer(10000, 10000).subscribe(() => {
      if (this.autoIncrement) {
        const nextIndex = this.currentIndex + 1
        if (nextIndex >= this.reviews.value.length) {
          this.setIndex(0)
        } else {
          this.setIndex(nextIndex)
        }
      }
    })
  }

}
