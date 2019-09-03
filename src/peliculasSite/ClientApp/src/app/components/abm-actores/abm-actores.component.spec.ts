import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmActoresComponent } from './abm-actores.component';

describe('AbmActoresComponent', () => {
  let component: AbmActoresComponent;
  let fixture: ComponentFixture<AbmActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
