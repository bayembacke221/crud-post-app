import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShowPostComponent } from './main-show-post.component';

describe('MainShowPostComponent', () => {
  let component: MainShowPostComponent;
  let fixture: ComponentFixture<MainShowPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainShowPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainShowPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
