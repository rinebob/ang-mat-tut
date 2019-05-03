import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css'],
})

export class PostListComponent implements OnInit, OnDestroy {
	// posts = [
	// 	{title: 'First Post Dude', content: 'Dude it\'s my first post!'},
	// 	{title: 'Second Post Dweezil', content: 'Dweezil it\'s my second post!'},
	// 	{title: 'Third Post Snively', content: 'Snively it\'s my third effing post!'},
	// ];

	// @Input() posts: Post[] = [];

	isLoading = false;
	posts: Post[] = [];
	private postsSub: Subscription;

	constructor(public postsService: PostsService) {}

	ngOnInit() {
		this.isLoading = true;
		this.postsService.getPosts();
		this.postsSub = this.postsService.getPostUpdateListener()
			.subscribe((posts: Post[]) => {
				this.isLoading = false;
				this.posts = posts;
			});
	}

	onDelete(postId: string) {
		console.log('100 post-list.c.ts onDelete. postId = ', postId);
		this.postsService.deletePost(postId);
	}

	ngOnDestroy() {
		this.postsSub.unsubscribe();
	}
}
