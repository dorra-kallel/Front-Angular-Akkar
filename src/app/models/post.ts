import { NgModule } from '@angular/core';
import { Comment } from './comment';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    FormsModule
  ],
})
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


