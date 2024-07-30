import { IUser, ICategory, IOperationType, IOperation } from './entities';

export const mockUser: IUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'hashedPassword123',
  imageUrl: 'https://example.com/john-doe-avatar.jpg'
};

export const mockCategories: ICategory[] = [
  { name: 'Groceries' },
  { name: 'Utilities' },
  { name: 'Rent' },
  { name: 'Transportation' },
  { name: 'Entertainment' },
  { name: 'Healthcare' },
  { name: 'Education' },
  { name: 'Shopping' },
  { name: 'Savings' },
  { name: 'Other' }
];

export const mockOperationTypes: IOperationType[] = [
  { name: 'Income' },
  { name: 'Expense' }
];

export const mockOperations: IOperation[] = [
  {
    user: mockUser,
    datetime: '2023-01-15T10:30:00Z',
    category: mockCategories[0],
    name: 'Weekly grocery shopping',
    amount: '120.50',
    type: mockOperationTypes[1]
  },
  {
    user: mockUser,
    datetime: '2023-02-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: '1200.00',
    type: mockOperationTypes[1]
  },
  {
    user: mockUser,
    datetime: '2023-02-15T14:45:00Z',
    category: mockCategories[4],
    name: 'Movie tickets',
    amount: '30.00',
    type: mockOperationTypes[1]
  },
  {
    user: mockUser,
    datetime: '2023-03-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: '3500.00',
    type: mockOperationTypes[0]
  },
  {
    user: mockUser,
    datetime: '2023-03-10T11:20:00Z',
    category: mockCategories[5],
    name: 'Doctor appointment',
    amount: '75.00',
    type: mockOperationTypes[1]
  },
  // ... (продолжайте добавлять операции до 50)
  {
    user: mockUser,
    datetime: '2024-12-25T18:30:00Z',
    category: mockCategories[7],
    name: 'Christmas shopping',
    amount: '250.00',
    type: mockOperationTypes[1]
  }
];

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

for (let i = mockOperations.length; i < 50; i++) {
  const randomCategory = mockCategories[Math.floor(Math.random() * mockCategories.length)];
  const randomType = mockOperationTypes[Math.floor(Math.random() * mockOperationTypes.length)];
  const randomAmount = (Math.random() * 1000).toFixed(2);
  const randomDatetime = randomDate(new Date(2023, 0, 1), new Date(2024, 7, 31));

  mockOperations.push({
    user: mockUser,
    datetime: randomDatetime.toISOString(),
    category: randomCategory,
    name: `${randomType.name === 'Income' ? 'Received' : 'Paid for'} ${randomCategory.name}`,
    amount: randomAmount,
    type: randomType
  });
}
