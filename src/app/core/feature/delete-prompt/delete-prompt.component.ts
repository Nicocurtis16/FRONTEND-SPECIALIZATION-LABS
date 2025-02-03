import { Component, EventEmitter, Output } from '@angular/core';
import {HeadLineComponent} from "../../../shared/component/head-line/head-line.component";
import {TextComponent} from "../../../shared/component/text/text.component";
import {ButtonComponent} from "../../../shared/component/button/button.component";
import {Store} from "@ngrx/store";
import {selectedInvoiceSuccess} from "../../../shared/state/selectors/invoice.selector";
import {NotificationService} from "../../../shared/service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-prompt',
  standalone: true,
  imports: [
    HeadLineComponent,
    TextComponent,
    ButtonComponent
  ],
  templateUrl: './delete-prompt.component.html',
  styleUrl: './delete-prompt.component.css'
})
export class DeletePromptComponent {
  @Output() confirmDelete = new EventEmitter<void>(); // Corrected typo and initialized
  @Output() cancelDelete = new EventEmitter<void>(); // Initialized

  invoice = this.store.selectSignal(selectedInvoiceSuccess);
  constructor(private store: Store, private router: Router,
              private notificationService: NotificationService,
  ) {}
  onDelete() {
    this.confirmDelete.emit(); // Emit the confirm event
    this.notificationService.showNotification('invoice delted sucesfully .', 'success')
  }

  onCancel() {
    this.cancelDelete.emit(); // Emit the cancel event
  }
}
