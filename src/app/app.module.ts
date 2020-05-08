import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserDetailComponent } from './userDetail.component';
// import { GithubService } from './gitUsers.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RainbowDirective } from './Rainbow.directive';
import { AuthInterceptor } from './interceptor/http.intercetor';
@NgModule({
  imports:[ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, UserDetailComponent, RainbowDirective ],
  providers: [{
    provide: HTTP_INTERCEPTORS,  
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
