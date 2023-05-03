import { Injectable } from '@angular/core';
import { PostTopic, post } from './models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './models/comment';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postURL : string ="http://localhost:8089/spring/Post/";
  constructor(private myHttp : HttpClient) { }

  addPost(Post:post){
    return this.myHttp.post(this.postURL+"add/1",Post)
  }
  getTrendingPosts():Observable<post[]>{
    return this.myHttp.get<post[]>(this.postURL+"trending");

  }
  getAllPosts():Observable<post[]>{
    return this.myHttp.get<post[]>(this.postURL+"all");

  }
  getPostById(id: number):Observable<post>{
    return this.myHttp.get<post>(this.postURL+"get/post/"+id);

  }
  getPostsByCategory(cat : PostTopic):Observable<post[]>{
    return this.myHttp.get<post[]>(this.postURL+"get/category/"+cat);

  }
  getPostsByUserId(uid : number):Observable<post[]>{
    return this.myHttp.get<post[]>(this.postURL+"findBy/user/"+uid);

  }
  getPostsByUserName(name : string):Observable<post[]>{
    return this.myHttp.get<post[]>(this.postURL+"find/"+name);
  }

  deletePost(id:number){
console.log("work");
    return this.myHttp.delete(this.postURL+"delete/"+id+"/1");
  }

  likePost(Post: post) {
    return this.myHttp.put(this.postURL+"like/"+ Post.postId+"/1",Post);
  }
  dislikePost(Post: post) {
    return this.myHttp.put(this.postURL+"dislike/"+ Post.postId+"/1",Post);
  }
  likeComment(comment: Comment) {
    return this.myHttp.put("http://localhost:8089/spring/Comment/like/"+ comment.commentId+"/1",Comment);
  }


}
