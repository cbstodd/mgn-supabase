import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGiftComponent } from './my-gift.component';

describe('MyGiftComponent', () => {
  let component: MyGiftComponent;
  let fixture: ComponentFixture<MyGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
