import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExtra } from './api-extra';

describe('ApiExtra', () => {
  let component: ApiExtra;
  let fixture: ComponentFixture<ApiExtra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiExtra],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiExtra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
