import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private drawerState = new BehaviorSubject<{ isOpen: boolean; type: string | null }>({
    isOpen: false,
    type: null,
  });

  drawerState$ = this.drawerState.asObservable();

  openDrawer(type: string) {
    this.drawerState.next({ isOpen: true, type });
  }

  closeDrawer() {
    this.drawerState.next({ isOpen: false, type: null });
  }
}
