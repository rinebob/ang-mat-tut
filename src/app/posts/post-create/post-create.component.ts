// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';
// import { Post } from '../post.model';

@Component({

	selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
	enteredTitle = '';
	enteredContent = '';
	// @Output and event emitter removed

	constructor(public postsService: PostsService) {}

	onAddPost(form: NgForm) {
		if (form.invalid) {
			return;
		}
		// const post: Post = {			//remove
		// 	title: form.value.title,
		// 	content: form.value.content
		// };
		// event emitter removed

		this.postsService.addPost(form.value.title, form.value.content);
	}

}

