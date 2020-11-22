import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCourseComponent } from './reactive-form-course.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormCourseComponent;
  let fixture: ComponentFixture<ReactiveFormCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
