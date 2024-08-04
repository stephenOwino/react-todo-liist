import React, { useState } from "react";
import Form from "./Form";
import Todos from "./Todos";
const App = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: "This is brand new Title",
			description: "This is brand new Description",
		},
	]);

	const [id, setId] = useState("");

	console.log("This is id = ", id);

	const deleteTodo = (id) => {
		setTodos(todos.filter((d) => d.id != id));
	};

	return (
		<>
			<div className='container'>
				<h1 className='text-center'>React To do List CRUD App</h1>

				{/* <button
onClick={()=>deleteTodo(2)} 
 className='btn btn-danger'>Test Delete</button> */}

				<Form id={id} setId={setId} todos={todos} setTodos={setTodos} />
				<Todos todos={todos} deleteTodo={deleteTodo} setId={setId} />
			</div>
		</>
	);
};

export default App;
