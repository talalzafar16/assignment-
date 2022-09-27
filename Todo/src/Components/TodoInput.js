const TodoInput=({todo,setTodo,addtodo})=>{
    return(
        <div className="input-wrapper">
            <input 
            type="text" 
            name="todo" 
            value={todo} 
            placeholder="create a new todo" 
            onChange={(e)=>{
                setTodo(e.target.value);
            }}
            />
            <button className="add-button" onClick={addTodo}>Add</button>
        </div>
    );
};
export default TodoInput;