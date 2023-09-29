import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMasterListComponent } from './role-master-list.component';

describe('RoleMasterListComponent', () => {
  let component: RoleMasterListComponent;
  let fixture: ComponentFixture<RoleMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
