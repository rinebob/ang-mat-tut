import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

// const routes: Routes = [
const routes = [
	{	path: '', component: PostListComponent }, // root page ie localhost:4200
	{	path: 'create', component: PostCreateComponent }, // note no / before create
	{	path: 'edit/:postId', component: PostCreateComponent }, // 
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],	// makes ang router aware of routes
	exports: [RouterModule]		// makes it available outside this module (in app.module)

})


export class AppRoutingModule {}
