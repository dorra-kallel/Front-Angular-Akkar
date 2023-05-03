import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../post.service';
import { PostTopic, post } from '../../models/post';
import { Comment } from '../../models/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../comment.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class PostsComponent implements OnInit {

  listPosts: post[] = [];
  listComments: Comment[] = [];
  comment: Comment = new Comment();
    post: post = new post();

  constructor(
    private ac: ActivatedRoute,
    private ps: PostService,
    private router: Router,
    private http: HttpClient,
    private cs: CommentService,
  ) {}


  ngOnInit(): void {
    this.ps.getAllPosts().subscribe((res) => (this.listPosts = res));
    this.cs.getPostCommments(4).subscribe((res) => (this.listComments = res));


  }

  likeComment(comment: Comment) {
    this.cs.likeComment(comment).subscribe(
      (response) => {
        console.log(response);
        confirm('Comment liked');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  likePost(poste: post) {
    this.ps.likePost(poste).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
            },
      (error) => {
        console.log(error);
      }
    );
  }

  dislikePost(poste: post) {
    this.ps.dislikePost(poste).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletePost(id: number) {
    console.log(id);
    this.ps.deletePost(id).subscribe(() => {
      this.listPosts = this.listPosts.filter((p) => p.postId !== id);
    });
  }

  getComments(id: number) {
    this.cs.getPostCommments(id).subscribe((resC) => {
      this.listComments = resC;
    });
  }
  addCommentaire(comment: Comment, p: post) {

    this.cs.addComment(comment, p.postId);;
console.log(comment);  }

}


// Language: typescript
