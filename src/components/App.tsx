import React from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import TodoContext from "../contexts/TodoContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";

//codigo fonte: https://github.com/balta-io/2804

//npm install react-router-dom @types/react-router-dom

const App = () => {
    return(
        <TodoContext>
            <BrowserRouter>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">
                    <Routes>
                        <Route path="/create" element={<AddTodo></AddTodo>}>
                        </Route>
                        <Route path="/" element={<TodoList></TodoList>}>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>            
        </TodoContext>
        
    );
}

export default App;