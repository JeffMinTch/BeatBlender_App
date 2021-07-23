import { Component, OnInit } from '@angular/core';
import { ILayoutConf, LayoutService } from 'app/shared/services/layout.service';
import { NavigationService } from 'app/shared/services/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quick-access-menu',
  templateUrl: './quick-access-menu.component.html',
  styleUrls: ['./quick-access-menu.component.scss']
})
export class QuickAccessMenuComponent implements OnInit {

  public menuItems: any[];
  public hasIconTypeMenuItem: boolean;
  public iconTypeMenuTitle: string;
  private menuItemsSub: Subscription;
  public layoutConf: ILayoutConf;

  constructor(
    private navService: NavigationService,
    // public themeService: ThemeService,
    private layout: LayoutService,
    // public jwtAuth: JwtAuthService,
  ) { }

  ngOnInit() {
    this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
    this.menuItemsSub = this.navService.menuItems$.subscribe(menuItem => {
      this.menuItems = menuItem;
      //Checks item list has any icon type.
      this.hasIconTypeMenuItem = !!this.menuItems.filter(
        item => item.type === "icon"
      ).length;
    });
    this.layoutConf = this.layout.layoutConf;

  }

  // setBackgroundColor(index: number) {
  //   switch (index) {
  //     case 0:
  //       return 'var(--body-color)'
  //     case 1:
  //       return 'var(--primary-color)'
  //     case 2:
  //       return 'var(--accent-color)'
  //     case 3:
  //       return 'var(--)'
  //   }
  // }


  // setIconColor(index: number) {
  //   switch (index) {
  //     case 0:
  //       return 'var(--light-theme)'
  //     case 1:
  //       return 'var(--light-theme)'
  //     case 2: {
  //       return 'var(--light-theme)'
  //     }
  //   }
  // }
}
