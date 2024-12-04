import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskUpdated = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  toggleTaskCompletion(id: number): void {
    this.taskService.toggleCompletion(id);
    this.taskUpdated.emit();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.taskUpdated.emit();
  }
}
