import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [TasksComponent, TaskComponent, AddTaskComponent],
    exports: [TasksComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule {}