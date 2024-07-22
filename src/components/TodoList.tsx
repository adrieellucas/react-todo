import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext)
    
    return(  
        <div>
            <h4>Minha lista de tarefas</h4>
            <table className="uk-table">
                <caption>Lista de Tarefas</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarefa</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map(
                            todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                        )
                    }
                </tbody>
            </table>
        </div>              
    );
}

export default TodoList;