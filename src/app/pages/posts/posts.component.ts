import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostService } from '../../post.service';
import { PostTopic, post } from '../../models/post';
import { Comment } from '../../models/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../comment.service';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
    posti: post = new post();
    showPostModal = false;
    showCommenttModal = false;
     categories = Object.values(PostTopic);
  constructor(
    private ac: ActivatedRoute,
    private ps: PostService,
    private router: Router,
    private http: HttpClient,
    private cs: CommentService,
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {
    this.ps.getAllPosts().subscribe((res) => (this.listPosts = res));
    this.cs.getPostCommments(4).subscribe((res) => (this.listComments = res));

  }
  openPostModal() {if (this.showPostModal === false) {
    this.showPostModal = true;
  }
  else {  this.showPostModal = false;}}
  openCommentModal() {if (this.showCommenttModal === false) {
    this.showCommenttModal = true;
  }
  else {  this.showPostModal = false;}}

  share() {
    const url = 'https://example.com'; // Replace with your own URL
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: url
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      const shareUrl = `mailto:?subject=${document.title}&body=${url}`;
      window.location.href = shareUrl;
    }
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
  addPost(formData: any) {
    const newPost: post = {
      postTitle: formData.title,
      postDescription: formData.body,
      category: formData.category,
      dateCreated: new Date(),
      voteCount: 0,
      postId: 0,
      postUrl: '',
      idUser: 0,
      comments: []
    };
    this.listPosts.push(newPost);
    this.ps.addPost(newPost).subscribe(()=>alert("Post added successfully"));
    this.showPostModal = false;
  }
   addComment(formData: any) {
    const newComment: Comment = {
      comment: formData.title,
      voteCount: 0,
      dateCommented: new Date(),
      postId: formData.postId,
      uid: 0
    };
    this.listComments.push(newComment);
    this.cs.addComment(newComment,formData.postId).subscribe(()=>alert("Comment added successfully"));
    this.showCommenttModal = false;
    console.log("lenna");
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
