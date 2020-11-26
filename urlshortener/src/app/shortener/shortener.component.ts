import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {

  constructor(
    public rest: RestService,
    private router: Router) { }

  ngOnInit(): void {
  }

  add(): void {
    this.router.navigate(['/create']);
  }
}
