import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css'],
})

export class PostListComponent {
	// posts = [
	// 	{title: 'First Post Dude', content: 'Dude it\'s my first post!'},
	// 	{title: 'Second Post Dweezil', content: 'Dweezil it\'s my second post!'},
	// 	{title: 'Third Post Snively', content: 'Snively it\'s my third effing post!'},
	// ];
	@Input() posts: Post[] = [];
}
