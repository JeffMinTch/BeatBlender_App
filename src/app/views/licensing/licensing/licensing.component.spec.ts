import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensingComponent } from './licensing.component';

describe('SampleMarketComponent', () => {
  let component: LicensingComponent;
  let fixture: ComponentFixture<LicensingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
