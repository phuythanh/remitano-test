import { BaseEntity } from './movie';

export interface UserResponse extends BaseEntity {
  email: string;
  password: string;
}

export interface UserRequest {
  email: string;
  password: string;
}
