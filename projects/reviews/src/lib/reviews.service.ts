import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum ReviewSources {
  GOOGLE="Google",
  FACEBOOK="Facebook",
  YELP="Yelp"
}

export interface Review {
  authorImg: string;
  authorName: string;
  datePublished: string;
  reviewBody: string;
  reviewRating: string;
  reviewSource: ReviewSources
}

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  reviewHost = 'https://reviewsonmywebsite.com'

  constructor(private http: HttpClient) { }

  fetchReviews (token: string): Promise<Review[]> {
    return this.http.get(`${this.reviewHost}/embed/${token}/json`).toPromise().then(res => res['data'])
  }
}
