import {Component, inject} from '@angular/core';
import {DataManagerService} from "../../services/data-manager.service";
import {DatePipe, DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
  dataManager = inject(DataManagerService);
  operations = this.dataManager.getAllOperations();
  balance = this.dataManager.getBalance();
  totalIncome = this.dataManager.getTotalIncome();
  totalExpenses = this.dataManager.getTotalExpenses();
}
