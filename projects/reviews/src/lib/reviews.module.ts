import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatIconModule } from '@angular/material/icon';

import { ReviewsComponent } from './reviews/reviews.component'
import { ReviewComponent } from './review/review.component'
import { ReviewsService } from './reviews.service'

@NgModule({
  declarations: [
    ReviewsComponent,
    ReviewComponent
  ],
  exports: [
    ReviewsComponent,
    ReviewComponent
  ],
  providers: [
    ReviewsService
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class ReviewsModule { }
