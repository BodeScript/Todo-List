import { useState, useEffect } from "react";
import Todo from "./Components/Todo";
import Search from "./Components/Search";
import Filter from "./Components/Filter";
import "./App.css";
import TodoForm from "./Components/Todoform";

const App = () => {
  const [todos, setTodos] = useState([]); // Inicializa como um array vazio
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(parseInt(storedUserId));
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchTodos();
    }
  }, [userId]); // Executa quando o userId muda (após o login)

  const fetchTodos = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos?userId=${userId}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Dados recebidos do backend:", data); // Adicione este log
        setTodos(data);
      } else {
        console.error("Erro ao buscar tarefas:", response.status);
        // TODO: Mostrar mensagem de erro para o usuário
      }
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      // TODO: Mostrar mensagem de erro para o usuário
    }
  };

  const addTodo = async (text, category) => {
    if (!userId) {
      console.error("Usuário não autenticado!");
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: text, description: null, completed: false, userId, category }),
      });

      if (response.ok) {
        const newTodoFromBackend = await response.json();
        setTodos([...todos, newTodoFromBackend]); // Adiciona a nova tarefa à lista (você pode optar por refazer a busca)
        console.log("Tarefa salva com sucesso!", newTodoFromBackend);
        fetchTodos(); // Refaz a busca das tarefas para atualizar a lista
      } else {
        console.error("Erro ao salvar a tarefa:", response.status);
        // TODO: Mostrar uma mensagem de erro para o usuário
      }
    } catch (error) {
      console.error("Erro ao enviar a requisição para salvar a tarefa:", error);
      // TODO: Mostrar uma mensagem de erro para o usuário
    }
  };

  const removeTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // A tarefa foi deletada com sucesso no backend, agora atualizamos o estado do frontend
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      } else {
        console.error("Erro ao remover a tarefa:", response.status);
        // TODO: Mostrar uma mensagem de erro para o usuário
      }
    } catch (error) {
      console.error("Erro ao remover a tarefa:", error);
      // TODO: Mostrar uma mensagem de erro para o usuário
    }
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {console.log("Estado de 'todos' antes do filtro:", todos)}
        {todos
          .filter((todo) =>
            todo && todo.title && todo.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => (sort === "Asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)))
          .map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;