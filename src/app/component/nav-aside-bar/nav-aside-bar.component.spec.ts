import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAsideBarComponent } from './nav-aside-bar.component';

describe('NavAsideBarComponent', () => {
  let component: NavAsideBarComponent;
  let fixture: ComponentFixture<NavAsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAsideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
