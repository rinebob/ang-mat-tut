import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Lec 15
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';	// Lec 18
import { MatInputModule,
	MatCardModule,
	MatButtonModule,
	MatToolbarModule,
	MatExpansionModule,
	} from '@angular/material'; // Lec 19
// import {MaterialModule} from './material.module';
// import {FlexLayoutModule} from '@angular/flex-layout';

// import {AppRouters} from './app.routes';
// import {DataService} from './data/data.service';
// import {AuthService} from './auth.service';

import { AppComponent } from './app.component';	// Lec 15
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component'; // Lec 20
import { PostListComponent } from './posts/post-list/post-list.component'; // Lec 21
// import { WelcomeComponent } from './welcome/welcome.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { PostDialogComponent } from './post-dialog/post-dialog.component';

@NgModule({

	declarations: [
		AppComponent,
		PostCreateComponent,	// Lec 15
		HeaderComponent, // Lec 20
		PostListComponent, // Lec 21
		// WelcomeComponent,
		// DashboardComponent,
		// PostDialogComponent
	],
	imports: [
	BrowserModule,
	FormsModule,
	BrowserAnimationsModule,	// Lec 18
	MatInputModule,	// Lec 19
	MatCardModule, // lec 19
	MatButtonModule, // lec 19
	MatToolbarModule, // lec 20
	MatExpansionModule, // Lec 21
	// BrowserAnimationsModule,
	// MaterialModule,
	// AppRouters,
	// FlexLayoutModule,
	],

	entryComponents: [
		// PostDialogComponent
	],

	// providers: [ DataService, AuthService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
