import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RocpService } from '../services/rocp.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentHero = 'No Hero';

  todos = new FormGroup({
    title: new FormControl('')
  });

  itemId = new FormGroup({
    id: new FormControl('')
  });

  todoWithId = new FormGroup({
    title: new FormControl(''),
    id: new FormControl('')
  });


  constructor(private route: ActivatedRoute, private rocp: RocpService) { }

  postTodoEc2(todoSub: FormGroup) {
    let form = JSON.stringify(todoSub.value);
    console.log('form in postTodoEC2: ' + form);
    this.rocp.postTodo(form).subscribe(
      () => {
        console.log('post success');
      }
    );
  }

  getTodoEc2ById(itemId: FormGroup) {
      let id = itemId.get('id').value;
      this.rocp.getTodoById(id).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  deleteTodoEc2ById(itemId: FormGroup) {
    let id = itemId.get('id').value;
    console.log('id in deleteTodoEc2ById: ' + id);
    this.rocp.deleteTodoById(id).subscribe(
    response => {
      console.log('Todo #' + id + ' Deleted');
    }
  );
}

completeTodoEc2ById(itemId: FormGroup) {
  let id = itemId.get('id').value;
  console.log('id in completeTodoEc2ById: ' + id);
  this.rocp.completeTodoById(id).subscribe(
  response => {
    console.log('Todo #' + id + ' marked completed');
  }
);
}


getTodosEc2() {
    this.rocp.getTodos().subscribe(
      response => {
        console.log(response);
      }
    );
  }

  putTodoEc2(todoSub: FormGroup) {
    let form = JSON.stringify(todoSub.value);
    this.rocp.putTodo(form).subscribe(
      () => {
        console.log('update success');
      }
    );
  }

  ngOnInit(): void {
    this.currentHero = this.route.snapshot.paramMap.get('heroname');
  }

}
