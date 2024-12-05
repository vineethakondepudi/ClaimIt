import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveArchiveComponent } from './remove-archive.component';

describe('RemoveArchiveComponent', () => {
  let component: RemoveArchiveComponent;
  let fixture: ComponentFixture<RemoveArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveArchiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
