export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  image?: string;
  author: Author;
  createdAt: string;
}
