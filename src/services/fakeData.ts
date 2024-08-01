import { IUser, ICategory, IOperationType, IOperation } from './entities';

export const mockUser: IUser = {
  name: 'John Doe',
  email: 'test@test.com',
  password: 'test',
  imageUrl: 'https://tse3.mm.bing.net/th?id=OIG2.W6vw1lh3Z3LAOlO06cvr&pid=ImgGn'
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
  { name: 'Savings' }
];

export const mockOperationTypes: IOperationType[] = [
  { name: 'Income' },
  { name: 'Expense' }
];

export const mockOperations: IOperation[] = [
  {
    id: 1,
    user: mockUser,
    datetime: '2023-01-15T10:30:00Z',
    category: mockCategories[0],
    name: 'Weekly grocery shopping',
    amount: 120.50,
    type: mockOperationTypes[1]
  },
  {
    id: 2,
    user: mockUser,
    datetime: '2023-02-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 3,
    user: mockUser,
    datetime: '2023-02-15T14:45:00Z',
    category: mockCategories[4],
    name: 'Movie tickets',
    amount: 30.00,
    type: mockOperationTypes[1]
  },
  {
    id: 4,
    user: mockUser,
    datetime: '2023-03-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 5,
    user: mockUser,
    datetime: '2023-03-10T11:20:00Z',
    category: mockCategories[5],
    name: 'Doctor appointment',
    amount: 75.00,
    type: mockOperationTypes[1]
  },
  {
    id: 6,
    user: mockUser,
    datetime: '2023-04-05T13:15:00Z',
    category: mockCategories[1],
    name: 'Electricity bill',
    amount: 85.30,
    type: mockOperationTypes[1]
  },
  {
    id: 7,
    user: mockUser,
    datetime: '2023-04-20T16:00:00Z',
    category: mockCategories[3],
    name: 'Bus pass',
    amount: 50.00,
    type: mockOperationTypes[1]
  },
  {
    id: 8,
    user: mockUser,
    datetime: '2023-05-01T09:30:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 9,
    user: mockUser,
    datetime: '2023-05-15T18:45:00Z',
    category: mockCategories[7],
    name: 'New shoes',
    amount: 89.99,
    type: mockOperationTypes[1]
  },
  {
    id: 10,
    user: mockUser,
    datetime: '2023-06-01T10:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 11,
    user: mockUser,
    datetime: '2023-06-10T14:30:00Z',
    category: mockCategories[6],
    name: 'Online course',
    amount: 199.99,
    type: mockOperationTypes[1]
  },
  {
    id: 12,
    user: mockUser,
    datetime: '2023-07-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 13,
    user: mockUser,
    datetime: '2023-07-15T12:00:00Z',
    category: mockCategories[4],
    name: 'Concert tickets',
    amount: 150.00,
    type: mockOperationTypes[1]
  },
  {
    id: 14,
    user: mockUser,
    datetime: '2023-08-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 15,
    user: mockUser,
    datetime: '2023-08-15T16:30:00Z',
    category: mockCategories[0],
    name: 'Grocery shopping',
    amount: 95.75,
    type: mockOperationTypes[1]
  },
  {
    id: 16,
    user: mockUser,
    datetime: '2023-09-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 17,
    user: mockUser,
    datetime: '2023-09-10T11:45:00Z',
    category: mockCategories[5],
    name: 'Dentist appointment',
    amount: 120.00,
    type: mockOperationTypes[1]
  },
  {
    id: 18,
    user: mockUser,
    datetime: '2023-10-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 19,
    user: mockUser,
    datetime: '2023-10-15T14:00:00Z',
    category: mockCategories[7],
    name: 'Winter jacket',
    amount: 179.99,
    type: mockOperationTypes[1]
  },
  {
    id: 20,
    user: mockUser,
    datetime: '2023-11-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 21,
    user: mockUser,
    datetime: '2023-11-20T13:30:00Z',
    category: mockCategories[1],
    name: 'Gas bill',
    amount: 65.40,
    type: mockOperationTypes[1]
  },
  {
    id: 22,
    user: mockUser,
    datetime: '2023-12-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 23,
    user: mockUser,
    datetime: '2023-12-15T17:00:00Z',
    category: mockCategories[4],
    name: 'Cinema tickets',
    amount: 25.00,
    type: mockOperationTypes[1]
  },
  {
    id: 24,
    user: mockUser,
    datetime: '2024-01-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 25,
    user: mockUser,
    datetime: '2024-01-10T12:45:00Z',
    category: mockCategories[6],
    name: 'Textbooks',
    amount: 150.00,
    type: mockOperationTypes[1]
  },
  {
    id: 26,
    user: mockUser,
    datetime: '2024-02-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 27,
    user: mockUser,
    datetime: '2024-02-14T19:30:00Z',
    category: mockCategories[4],
    name: 'Valentine\'s Day dinner',
    amount: 120.00,
    type: mockOperationTypes[1]
  },
  {
    id: 28,
    user: mockUser,
    datetime: '2024-03-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 29,
    user: mockUser,
    datetime: '2024-03-15T11:00:00Z',
    category: mockCategories[3],
    name: 'Car maintenance',
    amount: 250.00,
    type: mockOperationTypes[1]
  },
  {
    id: 30,
    user: mockUser,
    datetime: '2024-04-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 31,
    user: mockUser,
    datetime: '2024-04-20T15:30:00Z',
    category: mockCategories[7],
    name: 'New smartphone',
    amount: 699.99,
    type: mockOperationTypes[1]
  },
  {
    id: 32,
    user: mockUser,
    datetime: '2024-05-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 33,
    user: mockUser,
    datetime: '2024-05-15T13:15:00Z',
    category: mockCategories[0],
    name: 'Grocery shopping',
    amount: 110.25,
    type: mockOperationTypes[1]
  },
  {
    id: 34,
    user: mockUser,
    datetime: '2024-06-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 35,
    user: mockUser,
    datetime: '2024-06-10T16:45:00Z',
    category: mockCategories[5],
    name: 'Annual health checkup',
    amount: 200.00,
    type: mockOperationTypes[1]
  },
  {
    id: 36,
    user: mockUser,
    datetime: '2024-07-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 37,
    user: mockUser,
    datetime: '2024-07-15T12:30:00Z',
    category: mockCategories[4],
    name: 'Music festival tickets',
    amount: 180.00,
    type: mockOperationTypes[1]
  },
  {
    id: 38,
    user: mockUser,
    datetime: '2024-08-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 39,
    user: mockUser,
    datetime: '2024-08-20T14:00:00Z',
    category: mockCategories[1],
    name: 'Internet bill',
    amount: 59.99,
    type: mockOperationTypes[1]
  },
  {
    id: 40,
    user: mockUser,
    datetime: '2024-09-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 41,
    user: mockUser,
    datetime: '2024-09-15T11:30:00Z',
    category: mockCategories[6],
    name: 'Online course subscription',
    amount: 49.99,
    type: mockOperationTypes[1]
  },
  {
    id: 42,
    user: mockUser,
    datetime: '2024-10-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 43,
    user: mockUser,
    datetime: '2024-10-10T17:45:00Z',
    category: mockCategories[7],
    name: 'New laptop',
    amount: 1299.99,
    type: mockOperationTypes[1]
  },
  {
    id: 44,
    user: mockUser,
    datetime: '2024-11-01T08:00:00Z',
    category: mockCategories[8],
    name: 'Salary deposit',
    amount: 3500.00,
    type: mockOperationTypes[0]
  },
  {
    id: 45,
    user: mockUser,
    datetime: '2024-11-15T13:00:00Z',
    category: mockCategories[3],
    name: 'Car insurance',
    amount: 450.00,
    type: mockOperationTypes[1]
  },
  {
    id: 46,
    user: mockUser,
    datetime: '2024-12-01T09:00:00Z',
    category: mockCategories[2],
    name: 'Monthly rent payment',
    amount: 500.00,
    type: mockOperationTypes[1]
  },
  {
    id: 47,
    user: mockUser,
    datetime: '2024-12-10T16:30:00Z',
    category: mockCategories[0],
    name: 'Grocery shopping',
    amount: 135.75,
    type: mockOperationTypes[1]
  }
  ]
