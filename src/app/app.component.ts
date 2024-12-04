import { Component } from '@angular/core';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [];
  filter: string = 'all';

  constructor(private taskService: TaskService) {
    this.updateTaskList();
  }

  updateTaskList(): void {
    this.tasks = this.taskService.getTasksByStatus(this.filter);
  }

  onFilterChange(status: string): void {
    this.filter = status;
    this.updateTaskList();
  }

  handleTaskUpdate(): void {
    this.updateTaskList();
  }
}
