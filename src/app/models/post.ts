import { Comment } from './comment';

export class post {
  postId!: number;
  postTitle!: string;
  postUrl!: string;
  voteCount!: number;
  postDescription!: string;
  category!: PostTopic;
  dateCreated!: Date;
  idUser!: number;
  comments!: Comment[];
  }

  export enum PostTopic {
    Search , General , Colocation, Recommendation
  }


