import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
//import { makeStyles } from '@mui/styles'; // This is removed

// Remove the makeStyles section

const TodoList = () => {
    const [inputVal, setInputVal] = useState("");
    const [todos, setTodos] = useState([]);
    const [isEdited, setIsEdited] = useState(false);
    const [editedId, setEditedId] = useState(null);
    // Remove the classes const

    const onChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleClick = () => {
        if (!isEdited) {
            setTodos([
                ...todos,
                { val: inputVal, isDone: false, id: new Date().getTime() }
            ]);
        } else {
            setTodos([...todos, { val: inputVal, isDone: false, id: editedId }]);
        }
        setInputVal("");
        setIsEdited(false);
    };

    const onDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const handleDone = (id) => {
        const updated = todos.map((todo) => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        });
        setTodos(updated);
    };

    const handleEdit = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        const editVal = todos.find((todo) => todo.id === id);
        setEditedId(editVal.id);
        setInputVal(editVal.val);
        setTodos(newTodos);
        setIsEdited(true);
    };

    return (
        <Container component="main" style={{ minHeight: '80vh', textAlign: "center", marginTop: 100 }}>
            <TextField
                variant="outlined"
                onChange={onChange}
                label="type your task"
                value={inputVal}
                style={{ width: "70%", marginBottom: 30 }}
            />
            <Button
                size="large"
                variant={isEdited ? "outlined" : "contained"}
                color="primary"
                onClick={handleClick}
                style={{ height: 55, marginBottom: 30 }}
                disabled={inputVal ? false : true}
            >
                {isEdited ? "Edit Task" : "Add Task"}
            </Button>
            <List style={{ width: "80%", margin: "auto", display: "flex", justifyContent: "space-around", flexDirection: 'column', border: "1px solid light-gray" }}>
                {todos.map((todo) => (
                    <ListItem key={todo.id} divider style={{ width: "100%", display: "flex", alignItems: "center" }}>
                        <Checkbox
                            onClick={() => handleDone(todo.id)}
                            checked={todo.isDone}
                        />
                        <Typography
                            style={{ width: "70%", color: todo.isDone ? "green" : "" }}
                        >
                            {todo.val}
                        </Typography>
                        <Button
                            onClick={() => handleEdit(todo.id)}
                            variant="contained"
                            style={{ marginLeft: 10 }}
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => onDelete(todo.id)}
                            color="secondary"
                            variant="contained"
                            style={{ marginLeft: 10 }}
                        >
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default TodoList;
