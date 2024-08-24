import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToComponent } from './tic-tac-to.component';

describe('TicTacToComponent', () => {
  let component: TicTacToComponent;
  let fixture: ComponentFixture<TicTacToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicTacToComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicTacToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
