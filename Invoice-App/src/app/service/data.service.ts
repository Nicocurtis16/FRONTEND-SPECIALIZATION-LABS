import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Invoice} from "./invoice";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private storageKey = 'invoices_data';
  private apiUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl).pipe(
      tap(data => this.saveDataToLocalStorage(data))
    );
  }

  getDataFromLocalStorage(): Invoice[] | null {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  saveDataToLocalStorage(data: Invoice[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
  getInvoiceById(id: string): Observable<Invoice | null> {
    const invoices = this.getDataFromLocalStorage();
    const invoice = invoices?.find(inv => inv.id === id) || null;
    return of(invoice);
  }
  updateInvoiceStatus(id: string, status: 'paid' | 'pending' | 'draft') {
    return this.http.patch(`/api/invoices/${id}`, { status });
  }


  clearDataFromLocalStorage(): void {
    localStorage.removeItem(this.storageKey);
  }

  deleteInvoice(id: string): Observable<void> {
    const invoices = this.getDataFromLocalStorage();
    if (invoices) {
      const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
      this.saveDataToLocalStorage(updatedInvoices);
    }
    return of(); // Correctly returning Observable<void>
  }

}
