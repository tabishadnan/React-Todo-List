import React, { Component } from 'react';

class Content extends Component {

    // state
    state = {
        name : "",
        isAdd : false,
        todoArr: []
    }

    //onHandleChange func
    onHandleChange = (e) => {

        // add todo input value
        this.setState({
            name: e.target.value
        })

    }

    //addTodo func
    addTodo = () => {
        // addTodoObj
        let addTodoObj = {
            value : this.state.name,
            isShowInput: false
        };
        console.log(addTodoObj);

        // todoArr
        let todoArr = this.state.todoArr;

        // add todo
        let addTodo = todoArr.concat(addTodoObj);

        //addTodoArr
        this.setState({
            name: "",
            todoArr : addTodo,
            isAdd : true,
            isEdit : false
        });

    }

    //editTodo func
    editTodo = (index) => {

        // todoArrCopy
        let todoArrCopy = this.state.todoArr;

        //isShowInput flag true
        todoArrCopy[index].isShowInput = true;
        this.setState({
            todoArr : todoArrCopy
        })

    }


    //onEdiCthange func
    onEdiCthange = (evt, index) => {

        // todoArrCopy
        let todoArrCopy = this.state.todoArr;

        // isShowInput value
        todoArrCopy[index].value = evt.target.value;
        this.setState({
            todoArr : todoArrCopy
        })
    }

    //saveTodo func
    saveTodo = (index) => {

        // todoArrCopy
        let todoArrCopy = this.state.todoArr;

        //isShowInput flag false
        todoArrCopy[index].isShowInput = false;
        this.setState({
            todoArr : todoArrCopy
        })
    }

    //removeTodo func
    removeTodo = (index) => {

         // todoArrCopy
        let todoArrCopy = this.state.todoArr;

         // remove todo
        todoArrCopy.splice(index, 1);
        this.setState({
            todoArr : todoArrCopy
        })
    }

    render() {
        return (
            <div className="container"> 
                <div className="row mt-5 mb-5">
                    <div className="col-12">
                        <div className="todo-wrapper">
                            <h1 className="todos-heading">TODOs</h1>
                            <div className="add-todo-input-wrapper">
                                <input type="text" name="name" id="add-todo" value={this.state.name} onChange={this.onHandleChange}/>
                                <button className="bg-light-sea-green" onClick={this.addTodo}>Add</button>
                            </div>
                            <div className="todo-list-wrapper">
                            {
                               this.state.todoArr.map((todo, index) => {
                                   return(
                                       <div className="todo" key={`${todo} ` + `${index}`}>
                                           {!todo.isShowInput && <span className="todo-heading">{todo.value}</span>} 
                                           {todo.isShowInput && <input type="text" name="name" id="edit-todo" value={todo.value} onChange={(evt) => this.onEdiCthange(evt, index)}/>}
                                           <button onClick={() => this.editTodo(index)}>Edit</button>
                                           <button onClick={() => this.saveTodo(index)}>Save</button>
                                           <button onClick={() => this.removeTodo(index)}>Delete</button>
                                       </div>
                                   )
                               })
                            }
                            </div>
                           {this.state.todoArr.length <= 0 &&
                            <div className="create-your-first-todo-warpper text-center mt-5">
                                <p>Create Your First Todo !!! 😉😉😉</p>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;