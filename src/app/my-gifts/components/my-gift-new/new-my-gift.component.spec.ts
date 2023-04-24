import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMyGiftComponent } from './new-my-gift.component';

describe('NewMyGiftComponent', () => {
  let component: NewMyGiftComponent;
  let fixture: ComponentFixture<NewMyGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMyGiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMyGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
