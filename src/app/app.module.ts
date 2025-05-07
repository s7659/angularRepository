import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StudentsComponent } from "./students/students.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,StudentsComponent,],
  bootstrap: [AppComponent],

})
export class AppModule { }