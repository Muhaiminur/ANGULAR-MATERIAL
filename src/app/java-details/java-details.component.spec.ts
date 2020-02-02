import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaDetailsComponent } from './java-details.component';

describe('JavaDetailsComponent', () => {
  let component: JavaDetailsComponent;
  let fixture: ComponentFixture<JavaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
