import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLengthComponent } from './data-length.component';

describe('DataLengthComponent', () => {
  let component: DataLengthComponent;
  let fixture: ComponentFixture<DataLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataLengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
