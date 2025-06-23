import { Component, Input } from '@angular/core';
import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name!: string;
  @Input() userId!: string;
  isAddTaskButton: boolean = false;
  
  constructor(private tasksService: TasksService){}

  get taskByUserId() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onClickAddButton(){
    this.isAddTaskButton = true;
  }

  closeAddModal() {
    this.isAddTaskButton = false;
  }

}
