export interface BaseEntity {
  id: number;
}
export interface IMovie extends BaseEntity {
  url: string;
  userId: number;
  like: number;
  dislike: number;
  createdAt: Date;
  userName: string;
  description: string;
  title: string;
}
