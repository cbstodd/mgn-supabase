import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGifttItemComponent } from './my-giftt-item.component';

describe('MyGifttItemComponent', () => {
  let component: MyGifttItemComponent;
  let fixture: ComponentFixture<MyGifttItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGifttItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGifttItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
