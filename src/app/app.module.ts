import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UsersComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule ]
})
export class AppModule{}