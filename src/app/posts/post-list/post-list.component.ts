import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css'],
})

export class PostListComponent implements OnInit, OnDestroy {

	isLoading = false;
	posts: Post[] = [];
	totalPosts = 10;
	postsPerPage = 2;
	currentPage = 1;
	pageSizeOptions = [1,2,5,10];
	private postsSub: Subscription;

	constructor(public postsService: PostsService) {}

	ngOnInit() {
		this.isLoading = true;
		this.postsService.getPosts(this.postsPerPage, this.currentPage);
		this.postsSub = this.postsService.getPostUpdateListener()
			.subscribe((posts: Post[]) => {
				this.isLoading = false;
				this.posts = posts;
			});
	}

	onChangedPage(pageData: PageEvent) {
		console.log('post-list.c.ts onChangedPage.  pageData = ', pageData)
		this.isLoading = true;
		this.currentPage = pageData.pageIndex + 1;
		this.postsPerPage = pageData.pageSize;
		this.postsService.getPosts(this.postsPerPage, this.currentPage);
	}

	onDelete(postId: string) {
		console.log('100 post-list.c.ts onDelete. postId = ', postId);
		this.postsService.deletePost(postId);
	}

	ngOnDestroy() {
		this.postsSub.unsubscribe();
	}
}
