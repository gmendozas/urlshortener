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
      document.getElementById("url-form")?.setAttribute("style", "display: none")
      document.getElementById("result-form")?.removeAttribute("style")
    }, (err) => {
      console.log(err);
    });
  }

  reset(): void {
    this.response.long_url = ""
    this.response.short_id = ""
    this.urlRequest.long_url = ""
    document.getElementById("result-form")?.setAttribute("style", "display: none")
    document.getElementById("url-form")?.removeAttribute("style")
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  copyUrl(){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.response.short_id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert("URL copied");
  }
}
