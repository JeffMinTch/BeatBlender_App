import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccessMenuComponent } from './quick-access-menu.component';

describe('QuickAccessMenuComponent', () => {
  let component: QuickAccessMenuComponent;
  let fixture: ComponentFixture<QuickAccessMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAccessMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAccessMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
