export interface BaseEntity {
  id: number;
}
export interface MovieResponse extends BaseEntity {
  url: string;
  userId: number;
  like: number;
  dislike: number;
  createdAt: Date;
  userName: string;
  description: string;
  title: string;
  youtubeId: string;
}

export interface MovieRequest {
  url: string;
  youtubeId: string;
  userName: string;
  description: string;
  title: string;
}
