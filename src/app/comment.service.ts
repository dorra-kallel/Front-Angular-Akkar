import { Injectable } from '@angular/core';
import { Comment } from './models/comment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  postURL : string ="http://localhost:8089/spring/Comment/";
  constructor(private myHttp : HttpClient) { }

  addComment(comment: Comment, id:number){
    comment.dateCommented=new Date;
    comment.voteCount = 0;
    console.log(comment);

    return this.myHttp.post(this.postURL+"add/4/1",comment)
  }
  getPostCommments(postId:number):Observable<Comment[]>{
    return this.myHttp.get<Comment[]>(this.postURL+"get/post/"+postId);
  }
  getCommmentByUserId(userId:number):Observable<Comment[]>{
    return this.myHttp.get<Comment[]>(this.postURL+"get/findBy/user/"+userId);
  }



  deleteComment(id:number){
console.log("work");
    return this.myHttp.delete(this.postURL+"delete/"+id);
  }
  likeComment(comment: Comment) {
    return this.myHttp.put(this.postURL+"like/"+ comment.commentId+"/1",Comment);
  }

}
