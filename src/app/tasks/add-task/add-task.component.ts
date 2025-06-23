import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({ required: true}) userId!: string;
  title: string = '';
  summary: string = '';
  dueDate: string = '';
  @Output() closeAddModal = new EventEmitter();
  private tasksService = inject(TasksService)  //dependency injection of task service make only one object and use it all over needed

  onClickAdd() {
    const addTaskObject = {
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: this.title, 
      summary: this.summary, 
      dueDate: this.dueDate,

    }
    this.tasksService.addTask(addTaskObject);
    this.closeAddModal.emit();
  }
}
