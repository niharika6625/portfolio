import {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const array = [];
    const[task, setTask] = useState(array);
    const[inputTask, setInputTask] = useState("");

    const handleInputChange =(event) => {
        setInputTask(event.target.value);
    }

    const handleAddTask = () => {
       if(inputTask !== "") {
        const isExist = task.some((item) => item === inputTask)
        if (!isExist) {
            setTask([...task, inputTask]);
            setInputTask("");
        } else {
            alert("The task already exists.")
        }
        } else {
            alert("Please enter a task")
        }
    }

    const handleDelete = (index) => {
        const taskTemp = task.filter((item, indexTemp) => (index !== indexTemp))
        console.log('index', index, 'taskTemp', taskTemp)
        setTask(taskTemp);
    }

  return (
    <div className="todoListWrap">
      <TextField id="taskInput" label="Enter task" variant="outlined" value={inputTask} onChange={(event) => handleInputChange(event)} />

      <Button 
        variant="contained"
        onClick={()=> handleAddTask()}
        >
            Add task
      </Button>
      <div className='taskContainerWrap'>
        {task && task?.map((item, index) => (
            <div key={index}>
                {item}
                <Button 
                    startIcon={<DeleteIcon/>}
                    onClick={()=>handleDelete(index)}
                />
            </div>
        ))

        }
      </div>
    </div>
  );
};
export default TodoList;

// 1. input field
// 2. Add Button
// 3. Use state to store the entry
// 4. display entry
// 5. clear input field on add button 
// 6. error for repeated task
// 7. condition for empty task add 
// 8. UI changes 
// 9. Delete added task
// 10. task array as a object {id, taskTitle, status}
// 11. mark task done
