import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedButtonSubject = new BehaviorSubject<{ icon: string; title: string } | null>(null);
  selectedButton$ = this.selectedButtonSubject.asObservable();

  setSelectedButton(button: { icon: string; title: string }) {
    this.selectedButtonSubject.next(button);
  }

  getSelectedButton() {
    return this.selectedButtonSubject.value;
  }
}
