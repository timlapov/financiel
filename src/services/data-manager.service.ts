import { Injectable } from '@angular/core';
import { mockCategories, mockUser, mockOperations, mockOperationTypes } from "./fakeData";
import {IOperation} from "./entities";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  constructor() { }

  getAllOperations() {
    return mockOperations.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());
  }

  getAllOperationTypes() {
    return mockOperationTypes;
  }

  getAllCategories() {
    return mockCategories;
  }
  getLastFiveOperations() {
    return [...mockOperations]
      .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime())
      .slice(0, 5);
  }

  getTotalIncome(): number {
    let sum = 0;
    mockOperations.forEach(operation => {
      if (operation.type.name === 'Income') {
        sum += operation.amount;
      }
    })
    return sum;
  }
  getTotalExpenses(): number {
    let sum = 0;
    mockOperations.forEach(operation => {
      if (operation.type.name === 'Expense') {
        sum += operation.amount;
      }
    })
    return sum;
  }
  getBalance(): number {
    return this.getTotalIncome() - this.getTotalExpenses();
  }

  getCategoryNames(): string[] {
    return mockCategories.map(category => category.name);
  }
  getCategorySums(operations: IOperation[] = mockOperations) {
    const categoryNames = this?.getCategoryNames();
    const sums = Array(categoryNames.length).fill(0);

    operations.forEach(operation => {
      const categoryIndex = categoryNames.indexOf(operation.category.name);
      if (categoryIndex !== -1 && operation.type.name === 'Expense') {
        sums[categoryIndex] += operation.amount;
      }
    });
    return sums;
  }
  // getIncomeExpensesSums(operations: IOperation[] = mockOperations) {
  //   const sums = {
  //     income: 0,
  //     expenses: 0,
  //   }
  //   operations.forEach(operation => {
  //     if (operation.type.name === 'Expense') {
  //       sums.expenses += operation.amount;
  //     } else {
  //       sums.income += operation.amount;
  //     }
  //   })
  //   return sums;
  // }
}
