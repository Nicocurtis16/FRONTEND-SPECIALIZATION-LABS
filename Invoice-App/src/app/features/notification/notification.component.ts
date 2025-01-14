import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from "../../service/notification.service";
import { NgForOf, NgClass } from "@angular/common";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  standalone: true,
  imports: [NgForOf, NgClass],
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe((notification: Notification) => {
      this.notifications.push(notification);

      // Remove the notification after 3 seconds
      setTimeout(() => {
        this.notifications.shift();
      }, 3000);
    });
  }
}
