export interface Posts{
  id?: number;
  title: string;
  slug: string;
  body: string;
  thumbnails: string;
  isPublished: number;
  createdAt?: Date;
}
