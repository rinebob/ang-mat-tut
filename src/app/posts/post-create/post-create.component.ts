import { Component, EventEmitter, Output } from '@angular/core';

@Component({

	selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
	enteredTitle = '';
	enteredContent = '';
	@Output() postCreated = new EventEmitter();
	onAddPost() {
		const post = {
			title: this.enteredTitle,
			content: this.enteredContent
		};
		this.postCreated.emit(post);
	}

}



// @Component({

// 	selector: 'app-post-create',	use 'app-' to distinguish from other html tags
// 	template:	 can insert html code here.  use this or:
// 	templateUrl: './post-create.component.html',
// 	styleUrls: ['./post-create.component.css']
// })

// export class PostCreateComponent {
// 	// Lec 16 / 17
// 	newPost = 'NO CONTENT - DEFAULT STRING';
// 	onAddPost() {
// 			alert('Post Added');
// 			this.newPost = 'The user\'s new post';	// Lec 17
// 		}

// 	newPost;
// 	onAddPost(postInput: HTMLTextAreaElement) {
// 		console.log('001 p-c.c.ts postInput = ', postInput);
// 		console.dir('001 p-c.c.ts postInput = ', postInput);
// 		}
// 	// Lec 18
// 	newPost;
// 	enteredValue;
// 	onAddPost() {
// 		this.newPost = this.enteredValue;	// Lec 18
// 	}

// }
