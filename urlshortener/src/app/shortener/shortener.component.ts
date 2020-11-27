import { Component, OnInit, Input, Output } from '@angular/core';
import { RestService, UrlResponse } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {

  @Input() urlRequest = { long_url: '', cdn_prefix: ''};
  response!: UrlResponse;

  constructor(
    public rest: RestService,
    private router: Router) { }

  ngOnInit(): void {
  }

  shortUrl(): void {
    this.urlRequest.cdn_prefix = window.location.hostname
    this.rest.createShortUrl(this.urlRequest).subscribe((result: UrlResponse) => {
      this.response = result;
      document.getElementById("submit")?.setAttribute("style", "display: none")
      document.getElementById("result")?.removeAttribute("style")
      console.log(result)
    }, (err) => {
      console.log(err);
    });
  }

  reset(): void {
    this.response.long_url = ""
    this.response.short_id = ""
    this.urlRequest.long_url = ""
    document.getElementById("result")?.setAttribute("style", "display: none")
    document.getElementById("submit")?.removeAttribute("style")
  }
}
