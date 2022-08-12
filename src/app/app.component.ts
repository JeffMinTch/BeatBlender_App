import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { RoutePartsService } from './shared/services/route-parts.service';

import { filter } from 'rxjs/operators';
import { UILibIconService } from './shared/services/ui-lib-icon.service';
import { AuthConfigService } from '../config/auth-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  appTitle = 'BeatBlender';
  pageTitle = '';

  constructor(
    public title: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private routePartsService: RoutePartsService,
    private iconService: UILibIconService,

  ) {
    iconService.init()
  }

  ngOnInit() {
    this.changePageTitle();

    // this.sleep();  
  }

  // async sleep() {
  //   await new Promise((resolve,reject) =>  {
  //     setTimeout(() => {
  //       resolve(true);
  //     },1000);
  //   });
  // }

  ngAfterViewInit() {
  }

  changePageTitle() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange) => {
      const routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
      if (!routeParts.length) {
        return this.title.setTitle(this.appTitle);
      }
      console.log(routeParts);
      // Extract title from parts;
      this.pageTitle = routeParts
                      .reverse()
                      .map((part) => part.title )
                      .reduce((partA, partI) => {return `${partA} > ${partI}`});
      this.pageTitle += ` | ${this.appTitle}`;
      this.title.setTitle(this.pageTitle);
    });
  }

  
}
