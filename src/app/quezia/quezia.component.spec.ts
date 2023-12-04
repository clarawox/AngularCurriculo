import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueziaComponent } from './quezia.component';

describe('QueziaComponent', () => {
  let component: QueziaComponent;
  let fixture: ComponentFixture<QueziaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueziaComponent]
    });
    fixture = TestBed.createComponent(QueziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
