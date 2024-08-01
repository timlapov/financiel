export interface IUser {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
}

export interface ICategory {
  name: string;
}

export interface IOperationType {
  name: string;
}

export interface IOperation {
  id: number;
  user: IUser;
  datetime: string;
  category: ICategory;
  name: string;
  amount: number;
  type: IOperationType;
}
