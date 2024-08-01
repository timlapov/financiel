import {Component, ElementRef, inject, OnInit, Renderer2} from '@angular/core';
import {IOperation, IUser, ICategory, IOperationType} from "../../services/entities";
import {DataManagerService} from "../../services/data-manager.service";
import {AsyncPipe, DatePipe, DecimalPipe, NgForOf} from "@angular/common";
import {Chart, ChartConfiguration, ChartData} from "chart.js/auto";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgForOf, AsyncPipe, DatePipe, DecimalPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  chartLeft: Chart | undefined;

  dataManager = inject(DataManagerService);
  lastOperations: IOperation[] = this.dataManager.getLastFiveOperations();
  operations: IOperation[] = this.dataManager.getAllOperations();
  balance = this.dataManager.getBalance();
  totalIncome = this.dataManager.getTotalIncome();
  totalExpenses = this.dataManager.getTotalExpenses();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.createLeftChart();
    this.createRightChart()
  }

  createLeftChart() {
    // Создаем элемент canvas
    const canvas = this.renderer.createElement('canvas');

    // Находим контейнер в DOM
    const container = this.elementRef.nativeElement.querySelector('#leftChartContainer');

    // Добавляем canvas в контейнер
    this.renderer.appendChild(container, canvas);

    const ctx = canvas.getContext('2d');

    const config: ChartConfiguration = {
      type: 'pie',
      data: {
        labels: this.getLeftChartLabels().slice(0, 8),
        datasets: [{
          label: 'Data',
          data: this.getLeftChartData(),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(0, 204, 150)',
            'rgb(235, 64, 52)',
            'rgb(128, 0, 128)',
            'rgb(60, 179, 113)'
          ],
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
        }
      }
    };
    this.chartLeft = new Chart(ctx, config);
  }
  getLeftChartData() {
    console.log(this.dataManager.getCategorySums());
    return this.dataManager.getCategorySums();
  }
  getLeftChartLabels() {
    console.log(this.dataManager.getCategoryNames());
    return this.dataManager.getCategoryNames()
  }

  createRightChart() {
    const canvas = this.renderer.createElement('canvas');
    const container = this.elementRef.nativeElement.querySelector('#rightChartContainer');
    this.renderer.appendChild(container, canvas);
    const ctx = canvas.getContext('2d');

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Income', 'Expenses'],
        datasets: [{
          label: '',
          data: [this.totalIncome, this.totalExpenses],
          backgroundColor: [
            'rgba(235, 64, 52, 0.7)',
            'rgba(60, 179, 113, 0.7)'
          ],
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        aspectRatio: 0.5,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              offset: true
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    };
    this.chartLeft = new Chart(ctx, config);
  }

}
