import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUnclaimComponent } from './view-unclaim.component';

describe('ViewUnclaimComponent', () => {
  let component: ViewUnclaimComponent;
  let fixture: ComponentFixture<ViewUnclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUnclaimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUnclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
