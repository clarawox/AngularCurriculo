import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariaComponent } from './maria.component';

describe('MariaComponent', () => {
  let component: MariaComponent;
  let fixture: ComponentFixture<MariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MariaComponent]
    });
    fixture = TestBed.createComponent(MariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
