import { useEffect, useRef, useState } from "react";
import ContentPage from "../components/styles/ContentPage"




type Todo = {
    id: number;
    text: string;
};
type TodoListProps = {
  todos: Todo[];
  onDelete: (id: number) => void;
   onUpdate: (id: number, newText: string) => void;
};
type TodoItemProps = {
  todo: {
    id: number;
    text: string;
  };
  onDelete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void;
};

export function TodoItem({ todo, onDelete, onUpdate }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
    const [editText, setEditText] = useState(todo.text); // 수정 중 텍스트

    const inputRef = useRef<HTMLInputElement>(null); 
     useEffect(() => {
        if (isEditing && inputRef.current) {
        inputRef.current.focus();
        }
    }, [isEditing]);
    const handleSave = () => {
        onUpdate(todo.id, editText); // 부모 state 갱신
        setIsEditing(false);         // 수정 종료
    };
	return(
    <>
        <li className="todo_item">
            <div className="todo_item_left">
                <span className="todo_item_num">{todo.id}</span>
                {isEditing ? (
                    <input
                        ref={inputRef}
                        className="todo_item_text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        
                    />
                    ) : (
                    <p className="todo_item_text">{todo.text}</p>
                )}
            </div>
            <div className="flex-center-gap-10 todo_item_right">
                <button className="common_btn"  onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>{isEditing ? "저장" : "수정"}</button>
                <button className="common_btn" onClick={() => onDelete(todo.id)}>삭제</button>
            </div>
        </li>
    </>
  )
}

export function  TodoList({ todos, onDelete, onUpdate  }: TodoListProps){
	return(
		<ul className="todo_list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
		</ul>
	)
}
 
function TodoPage () {
    //목데이터
    const [todoItems, setTodoItems] = useState<Todo[]>([
        { id: 1, text: '할일1' },
        { id: 2, text: '할일2' },
        { id: 3, text: '할일3' },
    ]);

    const [inputValue, setInputValue] = useState("");

    // 추가 버튼 클릭 시
    const handleAdd = () => {
        if (!inputValue.trim()) return;
        const newTodo: Todo = {
            id: todoItems.length + 1, // 추가 시 마지막 id +1
            text: inputValue,
        };
        setTodoItems([...todoItems, newTodo]);
        setInputValue("");
    };

    const handleDelete = (id: number) => {
        const newTodos = todoItems
            .filter((todo) => todo.id !== id)
            .map((todo, index) => ({ ...todo, id: index + 1 }));
        setTodoItems(newTodos);
    };
    const handleUpdate = (id: number, newText: string) => {
    const newTodos = todoItems.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodoItems(newTodos);
    };
    return(
        <>
          <ContentPage>
            <div className="todo">
                <h3 className="todo_title">오늘의 할일</h3>
                <div className="todo_add">
                    <label htmlFor="">
                        <input type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="할일을 입력하세요"
                            onKeyDown={ (e) => {
                                if (e.key === "Enter") {
                                    handleAdd();
                                }
                            }}
                        />
                    </label>
                    <button className="common_btn" onClick={handleAdd}>추가</button>
                </div>
                <TodoList todos={todoItems} onDelete={handleDelete} onUpdate={handleUpdate} />
            </div>
          </ContentPage>
        </>
    )
}


export default TodoPage