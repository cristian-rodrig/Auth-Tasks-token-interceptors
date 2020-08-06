import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks()
    .subscribe(
      (res:any) => {
        console.log(res);
        this.tasks = res;
      },
      err => console.log(err)
    )
      
  }

}
