import React, { useContext } from "react";
import { Todo } from "../models/Todo";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {
    const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext)

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    }

    const handleChange = (event: any) => {
        toggle(props.todo);
    }

    return(
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input 
                    className="uk-checkbox" 
                    type="checkbox" 
                    checked={props.todo.done}
                    onChange={() => handleChange(props.todo)}></input>
                </label>
            </td>
            <td className="uk-width-expand">
                { props.todo.title }
            </td>
            <td className="uk-width-auto">
                <button 
                className="uk-icon-button uk-button-danger" 
                uk-icon="trash"
                onClick={() => onRemove(props.todo)}></button>    
            </td>
        </tr>
    );
}

export default TodoListItem;