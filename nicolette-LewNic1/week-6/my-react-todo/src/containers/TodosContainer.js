import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import TodosList from '..components/TodosList'
import CreateTodoForm from '../components/CreateTodoForm';

class TodosContainer extends Component {
  state = {
    todos: []
  };
//when TodoContainer mounts, fetch todo data
  componentDidMount(){
    this.fetchData()
  }
  //fetch all todos from super-crud-api
  fetchData(){
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.data.todos,
        todo: ''
      })
    });
  }

  //provide a funcation to delete a todo on sucessful response
  deleteTodo = (todo) => {
    TodoModel.delete(todo).then((res) => {
      let todos = this.state.todos.filter(funcation(todo) 
        return todo._id !== res.data._id
      });
      this.setState({ todos });

    })
  }
  
  //provide a function to ceate new todo
  createTodo = (todo) => {
    let newTodo = {
      body: todo,
      completed: false
    }
    TodoModel.create(newTodo).then((res) => {
      let todos= this.state.todos;
      let newTodos = todos.push(res.data);
      this.setState({ newTodos });
    })
  }


  render(){
    return (
      <div className="todosContainer">
        <TodosList
          todos={ this.state.todos } 
          deleteTodo={ />
      </div>
    )
  }
}

export default TodosContainer;