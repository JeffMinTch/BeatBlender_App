import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;  // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {

  accountMenu: IMenuItem[] = [
    {
      type: 'separator',
      name: 'My Account'
    },
    {
      name: 'Dashboard',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'profile/overview'
    },
    
    {
      name: 'My Licenses',
      type: 'dropDown',
      tooltip: 'My Licenses',
      icon: 'library_books',
      state: 'profile/my-licenses',
      sub: [
        { name: 'Basic Licenses', state: 'basic-licenses' , type: 'link'},
        {name: 'Extended Licenses', state: 'extended-licenses', type: 'link'},
        // { name: 'How To Get A License', state: 'analytics' },
        // { name: 'Sampling Rules', state: 'crypto' },
        // { name: 'Video Tutorials', state: 'dark' },
        // { name: 'FAQ', state: 'dark' }

      ]
    },
    {
      name: 'Manage Audio',
      type: 'dropDown',
      tooltip: 'Upload Audio',
      icon: 'upload',
      state: 'profile',
      sub: [
        { name: 'Upload Sample', state: 'upload-audio', type: 'link' },
        {name: 'My Uploads', state: 'manage-audio', type: 'link'},
        // { name: 'How To Get A License', state: 'analytics' },
        // { name: 'Sampling Rules', state: 'crypto' },
        // { name: 'Video Tutorials', state: 'dark' },
        // { name: 'FAQ', state: 'dark' }
      ]
    },
    {
      name: 'Collaborations',
      type: 'link',
      tooltip: 'Collaborations',
      icon: 'queue_music',
      state: 'listen/playlists'
    },
    {
      name: 'Finances',
      type: 'link',
      tooltip: 'Finances',
      icon: 'account_balance_wallet',
      state: 'profile/finances'
    },
    {
      name: 'Settings',
      type: 'link',
      tooltip: 'Settings',
      icon: 'settings',
      state: 'listen/find'
    },
    
  ];

  listenMenu: IMenuItem[] = [
    {
      type: 'separator',
      name: 'Listen Music'
    },
    {
      name: 'All Music',
      type: 'link',
      tooltip: 'All Music',
      icon: 'headphones',
      state: 'listen/all-music'
    },
    {
      name: 'Find',
      type: 'link',
      tooltip: 'Find',
      icon: 'search',
      state: 'listen/find'
    },
    {
      name: 'Genres',
      type: 'link',
      tooltip: 'Documentation',
      icon: 'library_books',
      state: 'listen/genres'
    },
    {
      name: 'Playlists',
      type: 'link',
      tooltip: 'Playlists',
      icon: 'queue_music',
      state: 'listen/playlists'
    },
  ];



  sampleMarketMenu: IMenuItem[] = [
    {
      type: 'separator',
      name: 'Sample Market'
    },
    {
      name: 'How It Works',
      type: 'dropDown',
      tooltip: 'Documentation',
      icon: 'info',
      state: 'sample-market/docs',
      sub: [
        { name: 'Introduction', state: 'introduction' , type: 'link'},
        {name: 'What is Root Sounds', state: 'learning-management', type: 'link'},
        { name: 'How To Get A License', state: 'analytics' , type: 'link'},
        { name: 'Sampling Rules', state: 'crypto' , type: 'link'},
        { name: 'Video Tutorials', state: 'dark' , type: 'link'},
        { name: 'FAQ', state: 'dark' }

      ]
    },
    {
      name: 'Sample Market',
      type: 'link',
      tooltip: 'Sample Market',
      icon: 'storefront',
      state: 'sample-market'
    },
    // {
    //   name: 'Upload',
    //   type: 'link',
    //   tooltip: 'Documentation',
    //   icon: 'library_books',
    //   state: 'licensing/forms/upload-audio'
    // },
    // {
    //   name: 'My Licenses',
    //   type: 'dropDown',
    //   tooltip: 'My Licenses',
    //   icon: 'library_books',
    //   state: 'licensing/my-licenses',
    //   sub: [
    //     { name: 'Basic Licenses', state: 'basic-licenses' },
    //     {name: 'Extended Licenses', state: 'extended-licenses'},
    //   ]
    // },
  ];

  iconMenu: IMenuItem[] = [
    {
      name: 'HOME',
      type: 'icon',
      tooltip: 'Account',
      icon: 'person',
      state: 'profile'
    },
    {
      name: 'About',
      type: 'icon',
      tooltip: 'About',
      icon: 'info',
      state: 'home'
    },
    {
      name: 'Licensing',
      type: 'icon',
      tooltip: 'Licensing',
      icon: 'app_registration',
      state: 'home'
    },
    {
      name: 'SAMPLE MARKET',
      type: 'icon',
      tooltip: 'Sample Market',
      icon: 'storefront',
      state: 'sample-market'
    },
    
    {
      name: 'MUSIC',
      type: 'icon',
      tooltip: 'Listen Music',
      icon: 'headset',
      state: 'listen'
    },
    {
      name: 'Collaboration',
      type: 'icon',
      tooltip: 'Collaboration',
      icon: 'group_work',
      state: 'home'
    },
    // {
    //   name: 'Sample of the Day',
    //   type: 'icon',
    //   tooltip: 'Sample',
    //   icon: 'storefront',
    //   state: 'licensing/sample-market'
    // },
    {
      type: 'separator',
      name: 'App - Navigation'
    },
    {
      name: 'All Music',
      type: 'dropDown',
      tooltip: 'Dashboard',
      icon: 'music_note',
      state: 'dashboard',
      sub: [
        { name: 'Default', state: 'default' , type: 'link'},
        {name: 'Learning Management', state: 'learning-management', type: 'link'},
        { name: 'Analytics', state: 'analytics' , type: 'link'},
        { name: 'Cryptocurrency', state: 'crypto' , type: 'link'},
        { name: 'Dark Cards', state: 'dark' , type: 'link'}
      ]
    },
    {
      name: 'Audio Licenses',
      type: 'dropDown',
      tooltip: 'Sample Market',
      icon: 'storefront',
      state: 'licensing',
      sub: [
        {name: 'How it works', state: 'how-it-works', type: 'link'},
        {name: 'Basic Licenses', state: 'basic-licenses', type: 'link'},
        {name: 'Full Licenses', state: 'full-licenses', type: 'link'},
        // {name: 'Upload Your Samples', state: 'upload-samples'}
      ]
    },
    {
      name: 'Upload Audio',
      type: 'dropDown',
      tooltip: 'Upload Audio',
      icon: 'publish',
      state: 'forms',
      sub: [
        { name: 'Upload Audio', state: 'upload-audio', type: 'link'}
      ]
    },
    {
      name: 'DOC',
      type: 'extLink',
      tooltip: 'Documentation',
      icon: 'library_books',
      state: 'http://demos.ui-lib.com/egret-doc/'
    }
  ];

  separatorMenu: IMenuItem[] = [
    {
      type: 'separator',
      name: 'Custom components'
    },
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard'
    },
    {
      name: 'INBOX',
      type: 'link',
      tooltip: 'Inbox',
      icon: 'inbox',
      state: 'inbox'
    },
    {
      name: 'CHAT',
      type: 'link',
      tooltip: 'Chat',
      icon: 'chat',
      state: 'chat'
    },
    {
      name: 'CRUD Table',
      type: 'link',
      tooltip: 'CRUD Table',
      icon: 'format_list_bulleted',
      state: 'cruds/ngx-table'
    },
    {
      name: 'DIALOGS',
      type: 'dropDown',
      tooltip: 'Dialogs',
      icon: 'filter_none',
      state: 'dialogs',
      sub: [
        { name: 'CONFIRM', state: 'confirm', type: 'link' },
        { name: 'LOADER', state: 'loader' , type: 'link'}
      ]
    },
    {
      name: 'PROFILE',
      type: 'dropDown',
      tooltip: 'Profile',
      icon: 'person',
      state: 'profile',
      sub: [
        { name: 'OVERVIEW', state: 'overview' , type: 'link'},
        { name: 'SETTINGS', state: 'settings', type: 'link'},
        { name: 'BLANK', state: 'blank' , type: 'link'}
      ]
    },
    {
      name: 'TOUR',
      type: 'link',
      tooltip: 'Tour',
      icon: 'flight_takeoff',
      state: 'tour'
    },
    {
      type: 'separator',
      name: 'Integrated components'
    },
    {
      name: 'CALENDAR',
      type: 'link',
      tooltip: 'Calendar',
      icon: 'date_range',
      state: 'calendar'
    },
    {
      name: 'MATERIAL',
      type: 'dropDown',
      tooltip: 'Material',
      icon: 'favorite',
      state: 'material',
      sub: [
        { name: 'BUTTONS', state: 'buttons' },
        { name: 'Button Toggle', state: 'button-toggle' },
        { name: 'Buttons Loading', state: 'loading-buttons' },
        { name: 'CARDS', state: 'cards' },
        { name: 'GRIDS', state: 'grids' },
        { name: 'LISTS', state: 'lists' },
        { name: 'MENU', state: 'menu' },
        { name: 'TABS', state: 'tabs' },
        { name: 'SELECT', state: 'select' },
        { name: 'RADIO', state: 'radio' },
        { name: 'AUTOCOMPLETE', state: 'autocomplete' },
        { name: 'SLIDER', state: 'slider' },
        { name: 'PROGRESS', state: 'progress' },
        { name: 'SNACKBAR', state: 'snackbar' }
      ]
    },
    {
      name: 'FORMS',
      type: 'dropDown',
      tooltip: 'Forms',
      icon: 'description',
      state: 'forms',
      sub: [
        { name: 'BASIC', state: 'basic' },
        { name: 'EDITOR', state: 'editor' },
        { name: 'UPLOAD', state: 'upload' },
        { name: 'WIZARD', state: 'wizard' }
      ]
    },
    {
      name: 'TABLES',
      type: 'dropDown',
      tooltip: 'Tables',
      icon: 'format_line_spacing',
      state: 'tables',
      sub: [
        { name: 'FULLSCREEN', state: 'fullscreen' },
        { name: 'PAGING', state: 'paging' },
        { name: 'FILTER', state: 'filter' }
      ]
    },
    {
      name: 'MAP',
      type: 'link',
      tooltip: 'Map',
      icon: 'add_location',
      state: 'map'
    },
    {
      name: 'CHARTS',
      type: 'link',
      tooltip: 'Charts',
      icon: 'show_chart',
      state: 'charts'
    },
    {
      name: 'DND',
      type: 'link',
      tooltip: 'Drag and Drop',
      icon: 'adjust',
      state: 'dragndrop'
    },
    {
      type: 'separator',
      name: 'Other components'
    },
    {
      name: 'SESSIONS',
      type: 'dropDown',
      tooltip: 'Pages',
      icon: 'view_carousel',
      state: 'sessions',
      sub: [
        { name: 'SIGNUP', state: 'signup' },
        { name: 'SIGNIN', state: 'signin' },
        { name: 'FORGOT', state: 'forgot-password' },
        { name: 'LOCKSCREEN', state: 'lockscreen' },
        { name: 'NOTFOUND', state: '404' },
        { name: 'ERROR', state: 'error' }
      ]
    },
    {
      name: 'OTHERS',
      type: 'dropDown',
      tooltip: 'Others',
      icon: 'blur_on',
      state: 'others',
      sub: [
        { name: 'GALLERY', state: 'gallery' },
        { name: 'PRICINGS', state: 'pricing' },
        { name: 'USERS', state: 'users' },
        { name: 'BLANK', state: 'blank' }
      ]
    },
    {
      name: 'MATICONS',
      type: 'link',
      tooltip: 'Material Icons',
      icon: 'store',
      state: 'icons'
    },
    {
      name: 'DOC',
      type: 'extLink',
      tooltip: 'Documentation',
      icon: 'library_books',
      state: 'http://demos.ui-lib.com/egret-doc/'
    }
  ];

  plainMenu: IMenuItem[] = [
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard'
    },
    {
      name: 'INBOX',
      type: 'link',
      tooltip: 'Inbox',
      icon: 'inbox',
      state: 'inbox'
    },
    {
      name: 'CHAT',
      type: 'link',
      tooltip: 'Chat',
      icon: 'chat',
      state: 'chat'
    },
    {
      name: 'CRUD Table',
      type: 'link',
      tooltip: 'CRUD Table',
      icon: 'format_list_bulleted',
      state: 'cruds/ngx-table'
    },
    {
      name: 'CALENDAR',
      type: 'link',
      tooltip: 'Calendar',
      icon: 'date_range',
      state: 'calendar'
    },
    {
      name: 'DIALOGS',
      type: 'dropDown',
      tooltip: 'Dialogs',
      icon: 'filter_none',
      state: 'dialogs',
      sub: [
        { name: 'CONFIRM', state: 'confirm' },
        { name: 'LOADER', state: 'loader' }
      ]
    },
    {
      name: 'MATERIAL',
      type: 'dropDown',
      icon: 'favorite',
      state: 'component',
      sub: [
        { name: 'BUTTONS', state: 'buttons' },
        { name: 'Button Toggle', state: 'button-toggle' },
        { name: 'Buttons Loading', state: 'loading-buttons' },
        { name: 'CARDS', state: 'cards' },
        { name: 'GRIDS', state: 'grids' },
        { name: 'LISTS', state: 'lists' },
        { name: 'MENU', state: 'menu' },
        { name: 'TABS', state: 'tabs' },
        { name: 'SELECT', state: 'select' },
        { name: 'RADIO', state: 'radio' },
        { name: 'AUTOCOMPLETE', state: 'autocomplete' },
        { name: 'SLIDER', state: 'slider' },
        { name: 'PROGRESS', state: 'progress' },
        { name: 'SNACKBAR', state: 'snackbar' }
      ]
    },
    {
      name: 'FORMS',
      type: 'dropDown',
      tooltip: 'Forms',
      icon: 'description',
      state: 'forms',
      sub: [
        { name: 'BASIC', state: 'basic' },
        { name: 'EDITOR', state: 'editor' },
        { name: 'UPLOAD', state: 'upload' },
        { name: 'WIZARD', state: 'wizard' }
      ]
    },
    {
      name: 'TABLES',
      type: 'dropDown',
      tooltip: 'Tables',
      icon: 'format_line_spacing',
      state: 'tables',
      sub: [
        { name: 'FULLSCREEN', state: 'fullscreen' },
        { name: 'PAGING', state: 'paging' },
        { name: 'FILTER', state: 'filter' }
      ]
    },
    {
      name: 'PROFILE',
      type: 'dropDown',
      tooltip: 'Profile',
      icon: 'person',
      state: 'profile',
      sub: [
        { name: 'OVERVIEW', state: 'overview' },
        { name: 'SETTINGS', state: 'settings' },
        { name: 'BLANK', state: 'blank' }
      ]
    },
    {
      name: 'TOUR',
      type: 'link',
      tooltip: 'Tour',
      icon: 'flight_takeoff',
      state: 'tour'
    },
    {
      name: 'MAP',
      type: 'link',
      tooltip: 'Map',
      icon: 'add_location',
      state: 'map'
    },
    {
      name: 'CHARTS',
      type: 'link',
      tooltip: 'Charts',
      icon: 'show_chart',
      state: 'charts'
    },
    {
      name: 'DND',
      type: 'link',
      tooltip: 'Drag and Drop',
      icon: 'adjust',
      state: 'dragndrop'
    },
    {
      name: 'SESSIONS',
      type: 'dropDown',
      tooltip: 'Pages',
      icon: 'view_carousel',
      state: 'sessions',
      sub: [
        { name: 'SIGNUP', state: 'signup' },
        { name: 'SIGNIN', state: 'signin' },
        { name: 'FORGOT', state: 'forgot-password' },
        { name: 'LOCKSCREEN', state: 'lockscreen' },
        { name: 'NOTFOUND', state: '404' },
        { name: 'ERROR', state: 'error' }
      ]
    },
    {
      name: 'OTHERS',
      type: 'dropDown',
      tooltip: 'Others',
      icon: 'blur_on',
      state: 'others',
      sub: [
        { name: 'GALLERY', state: 'gallery' },
        { name: 'PRICINGS', state: 'pricing' },
        { name: 'USERS', state: 'users' },
        { name: 'BLANK', state: 'blank' }
      ]
    },
    {
      name: 'MATICONS',
      type: 'link',
      tooltip: 'Material Icons',
      icon: 'store',
      state: 'icons'
    },
    {
      name: 'DOC',
      type: 'extLink',
      tooltip: 'Documentation',
      icon: 'library_books',
      state: 'http://demos.ui-lib.com/egret-doc/'
    }
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  sampleMarketItems = new BehaviorSubject<IMenuItem[]>(this.sampleMarketMenu);
  sampleMarketItems$ = this.sampleMarketItems.asObservable();

  listenItems = new BehaviorSubject<IMenuItem[]>(this.listenMenu);
  listenItems$ = this.listenItems.asObservable();

  accountItems = new BehaviorSubject<IMenuItem[]>(this.accountMenu);
  accountItems$ = this.accountItems.asObservable();

  constructor() {}

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    switch (menuType) {
      case 'separator-menu':
        this.menuItems.next(this.separatorMenu);
        break;
      case 'icon-menu':
        this.menuItems.next(this.iconMenu);
        break;
      default:
        this.menuItems.next(this.plainMenu);
    }
  }
}
