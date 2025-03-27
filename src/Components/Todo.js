import React from "react";
import axios from "axios";
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Todo = ({ todo, completeTodo, removeTodo }) => {
   const handleComplete = async (todoId, currentStatus) => {
      try {
        
         const response = await axios.put(`http://localhost:3001/api/todos/${todoId}`, {
            completed: !currentStatus, // Alterna o status de completado
         });

        
         completeTodo(todoId, !currentStatus);
      } catch (error) {
         console.error("Erro ao atualizar o status da tarefa:", error);
         alert("Erro ao atualizar o status da tarefa. Tente novamente.");
      }
   };

   return (
      <div
         className="todo"
         style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
         <div className="content">
            <p>{todo.title}</p>
            <p className="category">{todo.category}</p>
         </div>
         <div>
            <button
               className="complete"
               onClick={() => handleComplete(todo.id, todo.completed)}
            >
               <MdDone />
            </button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>
               <MdClose />
            </button>
         </div>
      </div>
   );
};

export default Todo;
