import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchActorsComponent } from './search-actors.component';

describe('SearchActorsComponent', () => {
  let component: SearchActorsComponent;
  let fixture: ComponentFixture<SearchActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchActorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
