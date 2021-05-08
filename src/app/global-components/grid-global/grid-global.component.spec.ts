import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGlobalComponent } from './grid-global.component';

describe('GridGlobalComponent', () => {
  let component: GridGlobalComponent;
  let fixture: ComponentFixture<GridGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
