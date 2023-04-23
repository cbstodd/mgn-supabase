import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomOffCanvasComponent } from './bottom-off-canvas.component';

describe('BottomOffCanvasComponent', () => {
  let component: BottomOffCanvasComponent;
  let fixture: ComponentFixture<BottomOffCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomOffCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomOffCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
