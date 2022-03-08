import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveformComponent } from './form/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewComponent } from './view/view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { UserBackupService } from './services/user-backup.service';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ReactiveformComponent,
    TableComponent,
    TemplateFormComponent,
    UserComponent,
    EditComponent,
    AddUserComponent,
    ViewComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserBackupService],
  bootstrap: [AppComponent]
})
export class AppModule { }