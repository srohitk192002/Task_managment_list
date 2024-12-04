import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  addTask(name: string): void {
    const newTask: Task = { id: Date.now(), name, completed: false };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  toggleCompletion(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  getTasksByStatus(status: string): Task[] {
    if (status === 'completed') {
      return this.tasks.filter((task) => task.completed);
    }
    if (status === 'pending') {
      return this.tasks.filter((task) => !task.completed);
    }
    return this.tasks;
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
