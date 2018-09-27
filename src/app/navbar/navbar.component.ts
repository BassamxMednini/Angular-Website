import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) { 
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      (_: NavigationEnd) => this.currentUrl = _.url
   );
  }

  ngOnInit() {
  }

}
