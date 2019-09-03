import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmGenerosComponent } from './abm-generos.component';

describe('AbmGenerosComponent', () => {
  let component: AbmGenerosComponent;
  let fixture: ComponentFixture<AbmGenerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmGenerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
