import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Define the structure of a notification
export interface Notification {
  message: string; // The message to display
  type: 'success' | 'error' | 'info' | 'warning'; // The type of notification
}

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class NotificationService {
  // Subject to hold the notifications
  private notificationSubject = new Subject<Notification>();

  // Observable to subscribe to notifications
  notifications$ = this.notificationSubject.asObservable();

  // Method to trigger a new notification
  showNotification(message: string, type: 'success' | 'error' | 'info' | 'warning') {
    this.notificationSubject.next({ message, type });
  }
}
