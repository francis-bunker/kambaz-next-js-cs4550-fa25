import { Button, ListGroupItem } from "react-bootstrap";

export default function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string; done: boolean };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string; done: boolean }) => void;
}) {
    return (
        <ListGroupItem>
            <Button onClick={() => deleteTodo(todo.id)}
                id="wd-delete-todo-click"> Delete </Button>
            <Button onClick={() => setTodo(todo)}
                id="wd-set-todo-click"> Edit </Button>
            {todo.title} </ListGroupItem>);
}